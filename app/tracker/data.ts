export interface TrackerItem {
  title: string
  count: number
  description: string
}

export const trackerData: TrackerItem[] = [
  {
    title: 'Business Ideas Generated',
    count: 3,
    description: 'ideas explored'
  },
  {
    title: 'Business Ideas Validated',
    count: 0,
    description: 'ideas validated'
  },
  {
    title: 'Businesses Created',
    count: 0,
    description: 'businesses formally created'
  },
  {
    title: 'Businesses Built',
    count: 0,
    description: 'businesses with MVP'
  },
  {
    title: 'Businesses Launched',
    count: 0,
    description: 'businesses launched'
  },
  {
    title: 'Growing Businesses',
    count: 0,
    description: 'businesses growing'
  }
] 