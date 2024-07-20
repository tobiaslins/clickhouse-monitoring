import { LinkProps } from 'next/link'

import { type Action } from '@/components/data-table/cells/actions/types'
import { type CodeDialogOptions } from '@/components/data-table/cells/code-dialog-format'
import { type CodeToggleOptions } from '@/components/data-table/cells/code-toggle-format'
import { type HoverCardOptions } from '@/components/data-table/cells/hover-card-format'

export enum ColumnFormat {
  BackgroundBar = 'background-bar',
  ColoredBadge = 'colored-badge',
  RelatedTime = 'related-time',
  NumberShort = 'number-short',
  CodeToggle = 'code-toggle',
  CodeDialog = 'code-dialog',
  HoverCard = 'hover-card',
  Duration = 'duration',
  Boolean = 'boolean',
  Action = 'action',
  Number = 'number',
  Badge = 'badge',
  Code = 'code',
  Link = 'link',
  None = 'none',
}

export type ColumnFormatWithArgs =
  | [ColumnFormat.Action, Action[]]
  | [ColumnFormat.Link, LinkProps]
  | [ColumnFormat.HoverCard, HoverCardOptions]
  | [ColumnFormat.CodeDialog, CodeDialogOptions]
  | [ColumnFormat.CodeToggle, CodeToggleOptions]

// Union of all possible format options
export type ColumnFormatOptions = ColumnFormatWithArgs[1]
