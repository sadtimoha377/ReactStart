import { useState, useRef, useEffect } from "react";

const HoverImage = () => {
    const [radius, setRadius] = useState(0);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

    const handleMouseMove = () => {
        setRadius((prevRadius) => prevRadius + 1);

        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setRadius(0);
        }, 3000);
    }

    const handleMouseLeave = () => {
        clearTimeout(timerRef.current);
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerRef.current);
        }
    }, [])

    return (
        <div style={{ fontFamily: 'Tahoma, Geneva, sans-serif', padding: '32px' }}>
            <img
                src="/photo.png"
                alt="example"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    display: 'block',
                    width: '400px',
                    borderRadius: `${radius}px`
                }}
            />
            <p>border-radius: {radius}px</p>
        </div>
    )
}

export default HoverImage;
