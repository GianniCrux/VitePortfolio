import { InlineWidget } from "react-calendly"
import { useEffect } from "react"

export const Calendly = () => {
    useEffect(() => {
        // Inject custom CSS to style the Calendly widget
        const style = document.createElement('style')
        style.innerHTML = `
            .calendly-inline-widget {
                background-color: black !important;
            }
            .calendly-inline-widget iframe {
                filter: invert(1) hue-rotate(180deg);
                pointer-events: auto !important;
            }
        `
        document.head.appendChild(style)

        return () => {
            document.head.removeChild(style)
        }
    }, [])

    return (
        <div
            className="flex items-center justify-center bg-black py-4 min-h-screen font-lora"
            style={{ position: 'relative', zIndex: 0 }}
        >
            <div className="w-full max-w-4xl">
                <h3 className="text-3xl font-semibold text-amber-600 text-center mb-4 mt-10">
                    Schedule a Call
                </h3>
                <div style={{ position: 'relative', minHeight: '650px' }}>
                    <InlineWidget
                        url="https://calendly.com/gianni-disti"
                        styles={{ 
                            height: '100%',
                            width: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            pointerEvents: 'auto',
                            zIndex: 60,
                        }}
                    />
                </div>
            </div>
        </div>
    )
}