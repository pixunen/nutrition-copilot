export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div role="status" className="h-screen space-y-2.5 animate-pulse p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="flex items-center w-full space-x-2">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[400px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[480px]">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[440px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex items-center w-full space-x-2 max-w-[360px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    )
}