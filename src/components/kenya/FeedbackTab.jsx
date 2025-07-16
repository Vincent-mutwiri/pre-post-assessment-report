import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MessageSquare, TrendingUp, Users, Award, BarChart3, Download, Star, Lightbulb, ThumbsUp, ChevronRight } from 'lucide-react';

const FeedbackTab = () => {
  const [selectedDay, setSelectedDay] = useState('day1');

  // Hardcoded data from analysis
  const feedbackData = {
    day1: {
      overall_value_avg: 4.79,
      expectations_met_avg: 4.65,
      facilitator_rating_avg: 4.68,
      most_useful_concepts: [
        ["Learning science principles", 2],
        ["Learning Sciences Principles Cards", 1],
        ["The learning science principle", 1]
      ],
      suggestions_for_improvement: [
        "More of these types of sessions",
        "More examples for my business. Examples were shared, but I think more examples would help us more",
        "Make it more hands-on and collaborative",
        "Use more examples of current products and how learning science can be used to improve the products",
        "Perhaps activities can be created where startups even interact amongst each other. There's a lot we can learn from each other and there's also power in networking",
        "Add more community builders or ice breakers in sessions to keep engagement lively",
        "Clearly demarcate sessions so transitions are clear, especially between brakes",
        "Interleaving process can be applied to capture a lot in the session",
        "Maybe having a pre-read before the sessions to avoid introducing too many concepts at the same time which we might forget",
        "Allow sessions for interactions",
        "Having enough time to cover all the key concepts. 2 days wasn't enough for all the info, and skipping or rushing through some sections doesn't seem ideal",
        "Longer personalized sessions",
        "More activities and practice sessions",
        "Less text on the slides",
        "Making the teams interact",
        "Hmmm, I would suggest making it a 3-day session instead",
        "More practicals"
      ],
      sample_feedback: [
        "Would be interesting to have more frameworks like the learning science principles relating to different aspects of business",
        "Great work",
        "The conference is so good and helpful for companies, and it improves our products. Continue and make it further"
      ]
    },
    day2: {
      overall_value_avg: 4.79,
      expectations_met_avg: 4.68,
      facilitator_rating_avg: 4.76,
      most_useful_concepts: [
        ["The information about the courses and access to the mentors", 1],
        ["Journey Maps", 1],
        ["Learning Sciences", 1]
      ],
      suggestions_for_improvement: [
        "Make the training 3 days so that we cover the sessions more effectively",
        "The sessions to be more interactive",
        "In case of a group activity maybe give each startup a chance to explain/present then the Facilitators can then give feedback",
        "Make the sessions more engaging especially for the participants",
        "Share the session material for future reference",
        "Activities where startups interact with each other",
        "Less lectures but more interaction",
        "It's been a wonderful session. Just a request align on the instructions being given during the practical exercises",
        "Longer pause when asking if people have questions"
      ],
      sample_feedback: [
        "Keep being supportive"
      ]
    }
  };

  const currentData = feedbackData[selectedDay];

  const MetricCard = ({ title, value, icon: Icon, description, color = 'blue' }) => {
    const colorClasses = {
      blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-800',
      green: 'from-green-50 to-green-100 border-green-200 text-green-800',
      purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-800',
    };

    return (
      <Card className={`bg-gradient-to-br ${colorClasses[color]} border`}>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <div className="p-2 rounded-md bg-white/50">
              <Icon className={`h-4 w-4 text-${color}-600`} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold">{value.toFixed(2)}</span>
            <span className="text-sm text-muted-foreground mb-0.5">/ 5</span>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
          <Progress value={(value / 5) * 100} className="h-2 mt-3" />
        </CardContent>
      </Card>
    );
  };

  const FeedbackCard = ({ title, icon: Icon, children, className = '' }) => (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold flex items-center gap-2">
          <Icon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {children}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Session Feedback Analysis</h2>
          <p className="text-muted-foreground">
            Detailed feedback and metrics from training participants
          </p>
        </div>
        <Tabs 
          value={selectedDay} 
          onValueChange={setSelectedDay}
          className="w-full md:w-auto"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="day1">Day 1</TabsTrigger>
            <TabsTrigger value="day2">Day 2</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-3">
        <MetricCard 
          title="Overall Value" 
          value={currentData.overall_value_avg} 
          icon={Star}
          description="Average participant rating"
          color="blue"
        />
        <MetricCard 
          title="Expectations Met" 
          value={currentData.expectations_met_avg}
          icon={ThumbsUp}
          description="Participants' expectations met"
          color="green"
        />
        <MetricCard 
          title="Facilitator Rating" 
          value={currentData.facilitator_rating_avg}
          icon={Award}
          description="Average facilitator score"
          color="purple"
        />
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Most Useful Concepts */}
        <FeedbackCard title="Most Useful Concepts" icon={Lightbulb}>
          <div className="space-y-3">
            {currentData.most_useful_concepts.map(([concept, count], index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="font-medium">{concept}</span>
                <Badge variant="secondary">
                  {count} {count === 1 ? 'mention' : 'mentions'}
                </Badge>
              </div>
            ))}
          </div>
        </FeedbackCard>

        {/* Suggestions for Improvement */}
        <FeedbackCard title="Key Suggestions" icon={MessageSquare}>
          <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
            {currentData.suggestions_for_improvement.slice(0, 10).map((suggestion, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <ChevronRight className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground" />
                <p className="text-sm">{suggestion}</p>
              </div>
            ))}
            {currentData.suggestions_for_improvement.length > 10 && (
              <p className="text-sm text-muted-foreground text-center">
                +{currentData.suggestions_for_improvement.length - 10} more suggestions
              </p>
            )}
          </div>
        </FeedbackCard>
      </div>

      {/* Sample Feedback */}
      <FeedbackCard title="Participant Feedback" icon={MessageSquare}>
        <div className="grid gap-4 md:grid-cols-2">
          {currentData.sample_feedback.map((feedback, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border">
              <div className="flex-shrink-0 mt-1">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4 text-primary" />
                </div>
              </div>
              <p className="text-sm italic text-muted-foreground">"{feedback}"</p>
            </div>
          ))}
        </div>
      </FeedbackCard>

      {/* Key Insights */}
      <div className="grid gap-6 md:grid-cols-2">
        <FeedbackCard title="Key Strengths" icon={ThumbsUp}>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-green-500 flex-shrink-0"></div>
              <span>High overall satisfaction ({currentData.overall_value_avg.toFixed(2)}/5)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-green-500 flex-shrink-0"></div>
              <span>Strong facilitator performance ({currentData.facilitator_rating_avg.toFixed(2)}/5)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-green-500 flex-shrink-0"></div>
              <span>Learning Science Principles highly valued</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-green-500 flex-shrink-0"></div>
              <span>Content relevance to participants' work</span>
            </li>
          </ul>
        </FeedbackCard>

        <FeedbackCard title="Areas for Enhancement" icon={Lightbulb}>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-amber-500 flex-shrink-0"></div>
              <span>Increase interactive activities and networking</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-amber-500 flex-shrink-0"></div>
              <span>Extend session duration (3-day format suggested)</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-amber-500 flex-shrink-0"></div>
              <span>Improve time management and punctuality</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-1.5 w-1.5 mt-2 rounded-full bg-amber-500 flex-shrink-0"></div>
              <span>Provide more practical examples and hands-on exercises</span>
            </li>
          </ul>
        </FeedbackCard>
      </div>
    </div>
  );
};

export default FeedbackTab;