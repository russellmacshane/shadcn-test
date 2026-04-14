import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, InfoIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function MainButtons() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Button>Button</Button>
        <Button variant="outline" size="icon">
          <ArrowUpIcon />
        </Button>
        <Button variant="secondary" size="lg">
          Button
        </Button>
      </div>
      <div>
        <Alert>
          <InfoIcon />
          <AlertTitle>Hello Russ</AlertTitle>
          <AlertDescription>This is my Alert Description!!!</AlertDescription>
          <AlertAction>
            <Button variant="outline">Enabled</Button>
          </AlertAction>
        </Alert>
      </div>
      <div>
        <Badge>Hi Jereme!</Badge>
      </div>
    </div>
  )
}

export { MainButtons }
