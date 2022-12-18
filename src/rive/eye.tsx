import { useRive, useStateMachineInput } from "@rive-app/react-canvas"
import { useEffect, useState } from "react";
type Props = {
    className?: string
}

export const Eye = (props: Props) => {
    const { rive, RiveComponent } = useRive({
        src: "/eye.riv",
        autoplay: true,
        stateMachines: "State Machine 1" /* ステートマシンの名前が必須っぽい */
    });
    return (
        <RiveComponent />
    );
}