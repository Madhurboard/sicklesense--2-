import { Skeleton } from "@/components/ui/skeleton"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function HowItWorksLoading() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 container py-12">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <Skeleton className="h-12 w-[300px] mx-auto" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <Skeleton className="h-[300px] w-full rounded-lg" />
              <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Skeleton className="h-[300px] w-full rounded-lg" />
              <Skeleton className="h-[300px] w-full rounded-lg" />
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

