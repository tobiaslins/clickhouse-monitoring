import { CodeIcon } from '@radix-ui/react-icons'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { TableDDL } from './table-ddl'

interface ShowSQLButtonProps {
  database: string
  table: string
  className?: string
}

export async function ShowDDL({
  database,
  table,
  className,
}: ShowSQLButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            'text-muted-foreground flex flex-row items-center gap-2',
            className
          )}
          aria-label="Show DDL"
          title="Show Table DDL Table Definition"
        >
          <CodeIcon className="h-3 w-3" />
          Show DDL
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-max">
        <DialogHeader>
          <DialogTitle>SQL DDL Code</DialogTitle>
          <DialogDescription>
            CREATE query used for creating this table
          </DialogDescription>
        </DialogHeader>

        <TableDDL database={database} table={table} />
      </DialogContent>
    </Dialog>
  )
}
