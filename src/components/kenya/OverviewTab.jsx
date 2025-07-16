import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const OverviewTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Training Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Comprehensive analysis of the Learning Science Deepdive training program.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Key Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span>Total Participants:</span>
              <span className="font-medium">45</span>
            </div>
            <div className="flex justify-between">
              <span>Completion Rate:</span>
              <span className="font-medium">92%</span>
            </div>
            <div className="flex justify-between">
              <span>Average Score:</span>
              <span className="font-medium">84/100</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button variant="outline" className="w-full justify-start">
              View Full Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Download Data
            </Button>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Training Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>
              The Learning Science Deepdive training program was conducted over two days, focusing on 
              key educational principles and their practical applications in the classroom. The program 
              included interactive sessions, group activities, and assessments to measure learning outcomes.
            </p>
            <p>
              Participants showed significant improvement in their understanding of learning science 
              concepts, with an average score increase of 32% between pre and post-assessments.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OverviewTab;