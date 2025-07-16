import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Image, Download, ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'Learning Science Principles',
    type: 'PDF',
    description: 'Comprehensive guide to key learning science principles',
    icon: <FileText className="h-5 w-5 text-blue-500" />,
    action: 'Download',
    url: '#',
  },
  {
    title: 'Training Slides',
    type: 'PDF',
    description: 'Complete slide deck from the training sessions',
    icon: <FileText className="h-5 w-5 text-purple-500" />,
    action: 'Download',
    url: '#',
  },
  {
    title: 'Workshop Photos',
    type: 'Gallery',
    description: 'Photos from the training sessions',
    icon: <Image className="h-5 w-5 text-green-500" />,
    action: 'View',
    url: 'https://drive.google.com/drive/folders/1Sqa-jrm9Cx3pkxlJ2Am1tMo3dVTubUZN',
  },
  {
    title: 'Additional Reading',
    type: 'External Link',
    description: 'Recommended articles and papers on learning science',
    icon: <ExternalLink className="h-5 w-5 text-orange-500" />,
    action: 'Open',
    url: '#',
  },
];

const ResourcesTab = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>div]:shadow-sm">
        {resources.map((resource, index) => (
          <Card key={index} className="flex flex-col bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center space-x-2">
                {resource.icon}
                <span className="text-sm text-muted-foreground">{resource.type}</span>
              </div>
              <CardTitle className="text-lg pt-2">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm mb-4">
                {resource.description}
              </p>
            </CardContent>
            <div className="px-6 pb-4">
              <Button variant="outline" className="w-full bg-white hover:bg-accent/50" asChild>
                <a href={resource.url} target="_blank" rel="noopener noreferrer">
                  {resource.action === 'Download' && <Download className="mr-2 h-4 w-4" />}
                  {resource.action}
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
          <CardDescription>
            Explore these additional materials to continue your learning journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <h3 className="font-medium">Learning Science Community</h3>
              <p className="text-sm text-muted-foreground">
                Join our online community to connect with other educators and share best practices.
              </p>
            </div>
            <div className="border rounded-lg p-4 hover:bg-accent/50 transition-colors">
              <h3 className="font-medium">Upcoming Webinars</h3>
              <p className="text-sm text-muted-foreground">
                Register for our upcoming webinars on advanced learning science topics.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResourcesTab;