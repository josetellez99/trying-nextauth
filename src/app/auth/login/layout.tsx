interface AuthLayoutProps {
    children: React.ReactNode
}

export default function authLayout ({ children }: AuthLayoutProps) {
    return (
        <div className="flex h-full justify-center items-center bg-sky-500">
            {children}
        </div>
    )
}