import { FormControlLabel, Switch } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
  height?: number;
  scrollBehavior?: "smooth" | "auto";
  showAutoScrollButton?: boolean;
}

const AutoScrollContainer = ({
  children,
  height,
  scrollBehavior = "smooth",
  showAutoScrollButton = true,
}: Props) => {
  const [autoScroll, setAutoScroll] = React.useState(true);
  const containerElement = React.useRef<HTMLDivElement>(null);

  // Handle mousewheel events on the scroll container.
  const onWheel = () => {
    const { current } = containerElement;

    if (current && showAutoScrollButton) {
      setAutoScroll(
        current.scrollTop + current.offsetHeight === current.scrollHeight
      );
    }
  };

  // Apply the scroll behavior property after the first render,
  // so that the initial render is scrolled all the way to the bottom.
  React.useEffect(() => {
    setTimeout(() => {
      const { current } = containerElement;

      if (current) {
        current.style.scrollBehavior = scrollBehavior;
      }
    }, 0);
  }, [containerElement, scrollBehavior]);

  // When the children are updated, scroll the container to the bottom.
  React.useEffect(() => {
    if (!autoScroll) {
      return;
    }

    const { current } = containerElement;

    if (current) {
      current.scrollTop = current.scrollHeight;
    }
  }, [children, containerElement, autoScroll]);

  return (
    <div>
      <div
        onWheel={onWheel}
        ref={containerElement}
        style={{
          height,
          overflow: "auto",
          scrollBehavior: "auto",
          pointerEvents: "none",
        }}
      >
        {children}
      </div>
      {showAutoScrollButton && (
        <FormControlLabel
          control={<Switch size="small" />}
          label="Auto scroll"
          labelPlacement="end"
          checked={autoScroll}
        />
      )}
    </div>
  );
};

export default AutoScrollContainer;
