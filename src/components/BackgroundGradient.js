import { cn } from "../utils/cn";

export function BackgroundGradient({
  children,
  className,
  containerClassName,
  animate = true,
  border = true,
}) {
  return (
    <div
      className={cn(
        "relative p-px rounded-xl",
        containerClassName
      )}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
          animate ? "animate-gradient-x" : "",
          border ? "" : "p-0",
          "z-0"
        )}
      />
      <div className={cn("relative rounded-[11px] bg-white dark:bg-zinc-900 z-10", className)}>
        {children}
      </div>
    </div>
  );
}
