import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import { useEffect, useState } from "react";
type Props = {
    className?: string
}

export const Eye = (props: Props) => {
    const { rive, RiveComponent } = useRive({
        src: "/eye.riv",
        autoplay: true,
        stateMachines: "State Machine 1"
    });
    const [maxWidth, setMaxWidth] = useState<number>();
    const [maxHeight, setMaxHeight] = useState<number>();

    const xAxisInput = useStateMachineInput(rive, "LookAround", "xAxis", 0);
    const yAxisInput = useStateMachineInput(rive, "LookAround", "yAxis", 0);

    useEffect(() => {
        const body = document.querySelector("body");
        if (body) {
            const bodyRect = body.getBoundingClientRect();
            setMaxWidth(bodyRect.right);
            setMaxHeight(bodyRect.bottom);
        }
    }, []);

    useEffect(() => {
        const update = (e: { x: number; y: number; }) => {
            if (maxWidth && maxHeight && yAxisInput && xAxisInput) {
                xAxisInput.value = (e.x / maxWidth) * 100;
                yAxisInput.value = 100 - (e.y / maxHeight) * 100;
            }
        };
        window.addEventListener("mousemove", update);
        return () => {
            window.removeEventListener("mousemove", update);
        };
    }, [xAxisInput, yAxisInput, maxHeight, maxWidth]);

    return (
        <RiveComponent />
    );
}