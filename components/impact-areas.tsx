export function ImpactAreas() {
  return (
    <div className="flex justify-center gap-8 py-12">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-people" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
        <span className="text-sm font-medium text-center">
          Health for
          <br />
          people
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-planet rounded-full" />
        <span className="text-sm font-medium text-center">
          Climate &<br />
          Sustainability
        </span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 bg-prosperity" style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }} />
        <span className="text-sm font-medium text-center">
          Industrial
          <br />
          Transformation
        </span>
      </div>
    </div>
  )
}

