import { useAppConfig } from '#imports'
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
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Calendar, Heart, House, Mail, Settings, User } from 'lucide-react'
import { useState } from 'react'

function App() {
  const [notifications, setNotifications] = useState(true)
  const config = useAppConfig()

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
        <Tabs defaultValue="home" className="h-full flex flex-col gap-0">
          <TabsList className="h-auto rounded-none border-b bg-transparent p-0 w-full">
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

          <TabsContent value="home" className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
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
                          Built with WXT, React, TypeScript, and Tailwind CSS
                          4.0 for the best developer experience.
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
                          Hot reload and modern build tools for rapid
                          development.
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="profile" className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="space-y-8 p-4">
                {/* Profile Section */}
                <div className="text-center space-y-4">
                  <Avatar className="h-20 w-20 mx-auto ring-2 ring-offset-2 ring-primary/10">
                    <AvatarImage
                      src="/placeholder-avatar.jpg"
                      alt="User Avatar"
                    />
                    <AvatarFallback className="text-lg font-semibold">
                      EL
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold">Evan Long</h2>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4" />
                      <span>evan@example.com</span>
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
                      <span className="text-sm font-medium">July 2025</span>
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
            </ScrollArea>
          </TabsContent>

          <TabsContent value="settings" className="flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="space-y-6 p-4">
                {/* System Settings */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">System Settings</h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      Core extension functionality
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
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

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">
                        Sync Interval (minutes)
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Data synchronization frequency
                      </p>
                    </div>
                    <Input
                      type="number"
                      placeholder="15"
                      className="w-20 h-8 text-xs"
                    />
                  </div>
                </div>

                <Separator />

                {/* Runtime Configuration - Read Only */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Runtime Configuration
                    </h3>
                    <p className="text-xs text-muted-foreground mb-4">
                      Values from app.config.ts (read-only)
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">
                        Config Theme
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Theme from runtime config
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {config.theme}
                    </Badge>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">
                        Config Chat Status
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Chat setting from runtime config
                      </p>
                    </div>
                    <Badge
                      variant={
                        config.features?.enableChat ? 'default' : 'secondary'
                      }
                      className="text-xs"
                    >
                      {config.features?.enableChat ? 'Enabled' : 'Disabled'}
                    </Badge>
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-sm font-medium">
                        Config Max Tokens
                      </Label>
                      <p className="text-xs text-muted-foreground">
                        Token limit from runtime config
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {config.features?.maxTokens}
                    </Badge>
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
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
