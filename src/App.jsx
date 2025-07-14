import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, Cell } from 'recharts'
import { TrendingUp, Users, Award, BarChart3, FileText, Download } from 'lucide-react'
import './App.css'

// Sample data - in a real app, this would be loaded from the CSV
const performanceData = [
  { player: 'Kabz', day1Score: 6775, day2Score: 7944, scoreChange: 1169 },
  { player: 'Lilian', day1Score: 6621, day2Score: 7357, scoreChange: 736 },
  { player: 'L', day1Score: 6198, day2Score: 9203, scoreChange: 3005 },
  { player: 'Josef', day1Score: 5548, day2Score: 8146, scoreChange: 2598 },
  { player: 'Liz', day1Score: 5008, day2Score: 8240, scoreChange: 3232 },
  { player: 'Juliet Mutinda', day1Score: 4916, day2Score: 8252, scoreChange: 3336 },
  { player: 'Cyrille', day1Score: 4573, day2Score: 8375, scoreChange: 3802 },
  { player: 'Emma', day1Score: 4534, day2Score: 8323, scoreChange: 3789 },
  { player: 'Elvis', day1Score: 4072, day2Score: 7290, scoreChange: 3218 },
  { player: 'Edith', day1Score: 3995, day2Score: 8134, scoreChange: 4139 },
  { player: 'Victor', day1Score: 3492, day2Score: 8951, scoreChange: 5459 },
  { player: 'Respah', day1Score: 3130, day2Score: 7209, scoreChange: 4079 },
  { player: 'Bari', day1Score: 2871, day2Score: 6348, scoreChange: 3477 },
  { player: 'Lena', day1Score: 2764, day2Score: 4538, scoreChange: 1774 },
  { player: 'Nelius', day1Score: 1438, day2Score: 4308, scoreChange: 2870 }
]

const attendanceStats = {
  day1Total: 45,
  day2Total: 41,
  onlyDay1: 30,
  onlyDay2: 26,
  bothDays: 15
}

const performanceStats = {
  meanDay1: 4395.67,
  meanDay2: 7507.87,
  meanChange: 3112.20
}

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  // Prepare data for scatter chart
  const scatterData = performanceData.map(item => ({
    x: item.day1Score,
    y: item.day2Score,
    name: item.player,
    change: item.scoreChange
  }))

  // Prepare data for score change histogram
  const histogramData = performanceData.map(item => ({
    player: item.player,
    scoreChange: item.scoreChange
  })).sort((a, b) => a.scoreChange - b.scoreChange)

  const getChangeColor = (change) => {
    if (change > 4000) return '#22c55e' // green
    if (change > 2000) return '#3b82f6' // blue
    return '#f59e0b' // amber
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Learning Science Deepdive Performance Report
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Comprehensive analysis of participant performance across Day 1 and Day 2
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-sm">
                <FileText className="w-4 h-4 mr-1" />
                Generated Report
              </Badge>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Participants</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{attendanceStats.bothDays}</div>
              <p className="text-xs text-muted-foreground">
                Attended both days
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Improvement</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">+{performanceStats.meanChange.toFixed(0)}</div>
              <p className="text-xs text-muted-foreground">
                Points gained on average
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Day 1 Average</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{performanceStats.meanDay1.toFixed(0)}</div>
              <p className="text-xs text-muted-foreground">
                Initial performance baseline
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Day 2 Average</CardTitle>
              <Award className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{performanceStats.meanDay2.toFixed(0)}</div>
              <p className="text-xs text-muted-foreground">
                Final performance level
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for different views */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="performance">Performance Analysis</TabsTrigger>
            <TabsTrigger value="participants">Individual Results</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Attendance Summary</CardTitle>
                  <CardDescription>
                    Participant attendance across both training days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Day 1 Total</span>
                      <Badge variant="outline">{attendanceStats.day1Total}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Day 2 Total</span>
                      <Badge variant="outline">{attendanceStats.day2Total}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Both Days</span>
                      <Badge variant="default">{attendanceStats.bothDays}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Only Day 1</span>
                      <Badge variant="secondary">{attendanceStats.onlyDay1}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Only Day 2</span>
                      <Badge variant="secondary">{attendanceStats.onlyDay2}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>
                    Key performance metrics for participants who attended both days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Mean Day 1 Score</span>
                      <span className="font-semibold">{performanceStats.meanDay1.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mean Day 2 Score</span>
                      <span className="font-semibold">{performanceStats.meanDay2.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Mean Score Change</span>
                      <span className="font-semibold text-green-600">+{performanceStats.meanChange.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Improvement Rate</span>
                      <span className="font-semibold text-green-600">
                        {((performanceStats.meanChange / performanceStats.meanDay1) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Day 1 vs Day 2 Performance</CardTitle>
                  <CardDescription>
                    Scatter plot showing individual performance comparison
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <ScatterChart data={scatterData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="x" 
                        name="Day 1 Score" 
                        type="number" 
                        domain={['dataMin - 500', 'dataMax + 500']}
                      />
                      <YAxis 
                        dataKey="y" 
                        name="Day 2 Score" 
                        type="number" 
                        domain={['dataMin - 500', 'dataMax + 500']}
                      />
                      <Tooltip 
                        cursor={{ strokeDasharray: '3 3' }}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload
                            return (
                              <div className="bg-white p-3 border rounded shadow">
                                <p className="font-semibold">{data.name}</p>
                                <p>Day 1: {data.x}</p>
                                <p>Day 2: {data.y}</p>
                                <p className="text-green-600">Change: +{data.change}</p>
                              </div>
                            )
                          }
                          return null
                        }}
                      />
                      <Scatter dataKey="y" fill="#3b82f6" />
                    </ScatterChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Score Improvement Distribution</CardTitle>
                  <CardDescription>
                    Distribution of score changes from Day 1 to Day 2
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={histogramData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="player" angle={-45} textAnchor="end" height={100} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="scoreChange">
                        {histogramData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={getChangeColor(entry.scoreChange)} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="participants" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Individual Performance Results</CardTitle>
                <CardDescription>
                  Detailed breakdown of each participant's performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3">Participant</th>
                        <th className="text-right p-3">Day 1 Score</th>
                        <th className="text-right p-3">Day 2 Score</th>
                        <th className="text-right p-3">Score Change</th>
                        <th className="text-right p-3">Improvement %</th>
                      </tr>
                    </thead>
                    <tbody>
                      {performanceData
                        .sort((a, b) => b.scoreChange - a.scoreChange)
                        .map((participant, index) => (
                        <tr key={participant.player} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                          <td className="p-3 font-medium">{participant.player}</td>
                          <td className="p-3 text-right">{participant.day1Score.toLocaleString()}</td>
                          <td className="p-3 text-right">{participant.day2Score.toLocaleString()}</td>
                          <td className="p-3 text-right">
                            <span className="text-green-600 font-semibold">
                              +{participant.scoreChange.toLocaleString()}
                            </span>
                          </td>
                          <td className="p-3 text-right">
                            <Badge variant={participant.scoreChange > 3000 ? "default" : "secondary"}>
                              {((participant.scoreChange / participant.day1Score) * 100).toFixed(1)}%
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                  <CardDescription>
                    Analysis findings and observations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Universal Improvement</h4>
                        <p className="text-sm text-muted-foreground">
                          All participants who attended both days showed performance improvement, 
                          indicating effective training delivery.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Significant Growth</h4>
                        <p className="text-sm text-muted-foreground">
                          Average improvement of 70.8% demonstrates substantial learning gains 
                          across the participant cohort.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Consistent Results</h4>
                        <p className="text-sm text-muted-foreground">
                          No significant outliers detected, suggesting consistent training 
                          effectiveness across different performance levels.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendations</CardTitle>
                  <CardDescription>
                    Suggestions for future training improvements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Individual Analysis</h4>
                        <p className="text-sm text-muted-foreground">
                          Conduct deeper individual performance analysis to identify 
                          specific learning patterns and personalized improvement areas.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Content Review</h4>
                        <p className="text-sm text-muted-foreground">
                          Review quiz content and difficulty levels to ensure optimal 
                          assessment of learning outcomes and knowledge retention.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold">Feedback Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Implement participant feedback mechanisms to continuously 
                          improve training program effectiveness and engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Generated by Manus AI • Learning Science Performance Analysis
            </p>
            <p className="text-sm text-muted-foreground">
              Report Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

