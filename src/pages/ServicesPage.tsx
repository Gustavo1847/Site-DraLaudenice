import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Back Button Overlay */}
            <div className="fixed top-4 left-4 z-50">
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-white"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeft className="h-5 w-5 text-[#B88A44]" />
                </Button>
            </div>

            <Services />
        </div>
    );
};

export default ServicesPage;
