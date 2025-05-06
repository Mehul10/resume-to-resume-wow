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
  
  const oneDayInSeconds = 86400;
  
  // Get today's date at midnight UTC
  const todayMidnight = new Date();
  todayMidnight.setUTCHours(0, 0, 0, 0);
  const todayTimestamp = Math.floor(todayMidnight.getTime() / 1000);
  
  // Get yesterday's timestamp
  const yesterdayTimestamp = todayTimestamp - oneDayInSeconds;

  // Convert submission calendar keys to numbers and sort them
  const submissions = Object.keys(submissionCalendar)
    .map(key => parseInt(key))
    .sort((a, b) => b - a); // Sort in descending order

  if (submissions.length === 0) return 0;

  // Get the most recent submission timestamp
  const lastSubmission = submissions[0];
  const lastSubmissionDate = new Date(lastSubmission * 1000);
  lastSubmissionDate.setUTCHours(0, 0, 0, 0);
  const lastSubmissionTimestamp = Math.floor(lastSubmissionDate.getTime() / 1000);

  // If the last submission was before yesterday, the streak is broken
  if (lastSubmissionTimestamp < yesterdayTimestamp) {
    return 0;
  }

  // Calculate streak
  let streak = 0;
  let currentDate = lastSubmissionTimestamp;
  
  for (const submission of submissions) {
    const submissionDate = new Date(submission * 1000);
    submissionDate.setUTCHours(0, 0, 0, 0);
    const submissionTimestamp = Math.floor(submissionDate.getTime() / 1000);
    
    if (submissionTimestamp === currentDate || submissionTimestamp === currentDate - oneDayInSeconds) {
      if (submissionTimestamp === currentDate - oneDayInSeconds) {
        streak++;
        currentDate = submissionTimestamp;
      }
    } else {
      break;
    }
  }

  // If the last submission was today, add one to the streak
  if (lastSubmissionTimestamp === todayTimestamp) {
    streak++;
  }

  return streak;
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
          ranking: "Top 2.6%",
          contestRating: "1532",
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
        setStats({
          totalSolved: "200+",
          ranking: "Top 2.6%",
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
    <section id="leetcode" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">LeetCode Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consistently solving algorithmic challenges and improving problem-solving skills. Beats 97.4% of users in problem-solving proficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-lg font-semibold text-foreground">Problems Solved</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {loading ? "..." : stats.totalSolved}
            </p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Target className="w-6 h-6 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold text-foreground">Global Ranking</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {loading ? "..." : stats.ranking}
            </p>
            <p className="text-sm text-muted-foreground">Beats 97.4% users</p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Code2 className="w-6 h-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold text-foreground">Contest Rating</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {loading ? "..." : stats.contestRating}
            </p>
          </div>

          <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-purple-500 mr-2" />
              <h3 className="text-lg font-semibold text-foreground">Daily Challenge Streak</h3>
            </div>
            <p className="text-3xl font-bold text-foreground">
              {loading ? "..." : stats.streak}
            </p>
            <p className="text-sm text-muted-foreground">Consecutive daily problems</p>
          </div>
        </div>

        <div className="bg-background p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-foreground mb-6">Problem Solving Distribution</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-green-500 font-bold text-2xl mb-1">
                {loading ? "..." : `${stats.distribution.easy}+`}
              </div>
              <div className="text-sm text-muted-foreground">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-500 font-bold text-2xl mb-1">
                {loading ? "..." : `${stats.distribution.medium}+`}
              </div>
              <div className="text-sm text-muted-foreground">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-red-500 font-bold text-2xl mb-1">
                {loading ? "..." : `${stats.distribution.hard}+`}
              </div>
              <div className="text-sm text-muted-foreground">Hard</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://leetcode.com/u/mehhul/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
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