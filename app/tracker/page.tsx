import { trackerData } from './data'

export default function TrackerPage() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Business Journey Tracker
      </h1>
      <p className="mb-6 text-gray-500">
        Tracking my progress through the entrepreneurship journey
      </p>

      <div className="space-y-8">
        {trackerData.map((item, index) => (
          <div key={index} className="border rounded-lg p-6">
            <h2 className="text-xl font-medium mb-4">{item.title}</h2>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">{item.count}</span>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 