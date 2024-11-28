
import { Icons, SignUpForm } from "@/components/LandingPage";
import { APP_NAME } from "@/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
    return (
        <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-visible pt-4 md:pt-20">
            <div className="flex items-center w-full py-8 border-b border-border/80">
                <Link href="/" className="flex items-center gap-x-2">
                    <Icons.logo className="w-6 h-6" />
                    <h1 className="text-lg font-medium">
                        {APP_NAME}
                    </h1>
                </Link>
                <Link href="/" className="ml-auto flex items-center gap-x-1 text-sm hover:underline">
                    Back to Home
                    <ArrowRight className="w-4 h-4" /> {/* ArrowRight icon */}
                </Link>
            </div>

            <SignUpForm />

            <div className="flex flex-col items-start w-full">
                <p className="text-sm text-muted-foreground">
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="text-primary">
                        Terms of Service{" "}
                    </Link>
                    and{" "}
                    <Link href="/privacy-policy" className="text-primary">
                        Privacy Policy
                    </Link>
                </p>
            </div>
            <div className="flex items-start mt-auto border-t border-border/80 py-6 w-full">
                <p className="text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-primary">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    )
};

export default SignUpPage