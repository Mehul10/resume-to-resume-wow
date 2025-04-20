import { Trophy, Target, Code2, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LeetCodeStats {
  totalSolved: string;
  ranking: string;
  contestRating: string;
  streak: string;
  distribution: {
    easy: number;
    medium: number;
    hard: number;
  };
}

const calculateStreak = (submissionCalendar: Record<string, number>) => {
  if (!submissionCalendar) return 0;
  
  const today = Math.floor(Date.now() / 1000);
  const oneDayInSeconds = 86400;
  let currentStreak = 0;
  let date = today;

  // Convert submission calendar keys to numbers and sort them
  const submissions = Object.keys(submissionCalendar)
    .map(key => parseInt(key))
    .sort((a, b) => b - a); // Sort in descending order

  // If no submissions or last submission was not today/yesterday, return 0
  if (submissions.length === 0 || 
      (submissions[0] < (today - oneDayInSeconds))) {
    return 0;
  }

  // Calculate streak
  for (let i = 0; i < submissions.length; i++) {
    const submissionDate = submissions[i];
    const expectedDate = today - (currentStreak * oneDayInSeconds);
    
    if (Math.abs(submissionDate - expectedDate) <= oneDayInSeconds) {
      currentStreak++;
      date = submissionDate;
    } else {
      break;
    }
  }

  return currentStreak;
};

const LeetCode = () => {
  const [stats, setStats] = useState<LeetCodeStats>({
    totalSolved: "...",
    ranking: "...",
    contestRating: "...",
    streak: "...",
    distribution: {
      easy: 0,
      medium: 0,
      hard: 0
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/mehhul');
        const data = await response.json();
        
        // Calculate current streak from submission calendar
        const currentStreak = calculateStreak(data.submissionCalendar);
        const streakValue = currentStreak > 0 ? `${currentStreak} days` : "0 days";
        
        setStats({
          totalSolved: `${data.totalSolved}+`,
          ranking: "Top 2.7%", // Hardcoded since we know the accurate value
          contestRating: data.contestRating?.toString() || "1532",
          streak: streakValue,
          distribution: {
            easy: data.easySolved || 0,
            medium: data.mediumSolved || 0,
            hard: data.hardSolved || 0
          }
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
        // Fallback to static data if API fails
        setStats({
          totalSolved: "200+",
          ranking: "Top 2.7%",
          contestRating: "1532",
          streak: "0 days",
          distribution: {
            easy: 90,
            medium: 85,
            hard: 25
          }
        });
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  return (
    <section id="leetcode" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">LeetCode Journey</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Consistently solving algorithmic challenges and improving problem-solving skills. Beats 97.3% of users in problem-solving proficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold">Problems Solved</h3>
            </div>
            <p className="text-3xl font-bold text-primary">
              {loading ? "..." : stats.totalSolved}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold">Global Ranking</h3>
            </div>
            <p className="text-3xl font-bold text-primary">
              {loading ? "..." : stats.ranking}
            </p>
            <p className="text-sm text-gray-600">Beats 97.3% users</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold">Contest Rating</h3>
            </div>
            <p className="text-3xl font-bold text-primary">
              {loading ? "..." : stats.contestRating}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold">Streak</h3>
            </div>
            <p className="text-3xl font-bold text-primary">
              {loading ? "..." : stats.streak}
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6">Problem Solving Distribution</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-green-500 font-bold text-2xl mb-1">
                {loading ? "..." : `${stats.distribution.easy}+`}
              </div>
              <div className="text-sm text-gray-600">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-500 font-bold text-2xl mb-1">
                {loading ? "..." : `${stats.distribution.medium}+`}
              </div>
              <div className="text-sm text-gray-600">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-red-500 font-bold text-2xl mb-1">
                {loading ? "..." : `${stats.distribution.hard}+`}
              </div>
              <div className="text-sm text-gray-600">Hard</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://leetcode.com/u/mehhul/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Full Profile
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LeetCode; 