import { Box, Switch } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

interface Props {
  height?: number;
  scrollBehavior?: "smooth" | "auto";
  showAutoScrollButton?: boolean;
  children: React.ReactNode;
}

const AutoScrollContainer = ({
  height,
  scrollBehavior = "smooth",
  showAutoScrollButton = true,
  children,
}: Props) => {
  const [autoScroll, setAutoScroll] = useState(true);
  const containerElement = useRef<HTMLDivElement>(null);

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
    <Box>
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
      {showAutoScrollButton ? (
        <Switch
          isChecked={autoScroll}
          onChange={() => setAutoScroll(!autoScroll)}
        />
      ) : null}
    </Box>
  );
};

export default AutoScrollContainer;
