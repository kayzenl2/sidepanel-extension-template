import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Heart, House, Mail, Settings, User } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Heart className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-lg">Sidepanel Template</h1>
            <p className="text-sm text-muted-foreground">
              WXT + Tailwind CSS 4.0 + shadcn/ui
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <Tabs defaultValue="home" className="h-full flex flex-col">
          <TabsList className="h-auto rounded-none border-b bg-transparent p-0 w-full !w-full">
            <TabsTrigger
              value="home"
              className="data-[state=active]:after:bg-primary relative rounded-none py-2 px-4 flex items-center gap-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none flex-1"
            >
              <House className="h-4 w-4" />
              Home
            </TabsTrigger>
            <TabsTrigger
              value="profile"
              className="data-[state=active]:after:bg-primary relative rounded-none py-2 px-4 flex items-center gap-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none flex-1"
            >
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="data-[state=active]:after:bg-primary relative rounded-none py-2 px-4 flex items-center gap-2 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none flex-1"
            >
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <div className="space-y-4 p-4">
              <div>
                <h2 className="text-base font-semibold flex items-center gap-2 mb-2">
                  Welcome to Sidepanel Template
                  <Badge variant="secondary">v1.0.0</Badge>
                </h2>
                <p className="text-muted-foreground mb-4">
                  A modern browser extension template built with WXT, Tailwind
                  CSS 4.0, and shadcn/ui components.
                </p>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        🚀 Modern Stack
                      </CardTitle>
                      <CardDescription>
                        Built with WXT, React, TypeScript, and Tailwind CSS 4.0
                        for the best developer experience.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        🎨 Beautiful Design
                      </CardTitle>
                      <CardDescription>
                        Clean and accessible UI components from shadcn/ui
                        library.
                      </CardDescription>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        ⚡ Fast Development
                      </CardTitle>
                      <CardDescription>
                        Hot reload and modern build tools for rapid development.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <div className="space-y-8 p-4">
              {/* Profile Section */}
              <div className="text-center space-y-4">
                <Avatar className="h-20 w-20 mx-auto ring-2 ring-offset-2 ring-primary/10">
                  <AvatarImage
                    src="/placeholder-avatar.jpg"
                    alt="User Avatar"
                  />
                  <AvatarFallback className="text-lg font-semibold">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <span>john.doe@example.com</span>
                  </div>
                  <Badge variant="secondary" className="font-medium">
                    Premium User
                  </Badge>
                </div>
              </div>

              <Separator />

              {/* Account Details */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Account Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-muted-foreground">
                      Member Since
                    </span>
                    <span className="text-sm font-medium">January 2024</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-muted-foreground">
                      Last Login
                    </span>
                    <span className="text-sm font-medium">Today</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-muted-foreground">
                      Status
                    </span>
                    <Badge
                      variant="outline"
                      className="text-green-600 border-green-600"
                    >
                      Active
                    </Badge>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Actions */}
              <div className="space-y-3">
                <Button className="w-full">Edit Profile</Button>
                <Button variant="outline" className="w-full">
                  Change Password
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="space-y-4 p-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Settings</h2>
                <p className="text-muted-foreground mb-6">
                  Configure your extension preferences
                </p>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-sm font-medium">Dark Mode</Label>
                        <p className="text-xs text-muted-foreground">
                          Toggle between light and dark themes
                        </p>
                      </div>
                      <Switch
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                      />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label className="text-sm font-medium">
                          Notifications
                        </Label>
                        <p className="text-xs text-muted-foreground">
                          Enable push notifications
                        </p>
                      </div>
                      <Switch
                        checked={notifications}
                        onCheckedChange={setNotifications}
                      />
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Label
                        htmlFor="sync-interval"
                        className="text-sm font-medium"
                      >
                        Sync Interval (minutes)
                      </Label>
                      <Input
                        id="sync-interval"
                        type="number"
                        placeholder="15"
                        className="max-w-[120px]"
                      />
                    </div>
                  </div>

                  <Separator />

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      Reset
                    </Button>
                    <Button className="flex-1">Save Changes</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
