import { useState, useEffect, useRef } from "react";

export function useTimer(initialSeconds = 600) { // 10分をデフォルト
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    // タイマーのカウント処理
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    // 時間フォーマット（MM:SS）
    const formatTime = () => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    return {
        seconds,
        isRunning,
        formatTime,
        start: () => setIsRunning(true),
        pause: () => setIsRunning(false),
        reset: () => setSeconds(initialSeconds),
    };
}