import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center pb-12 max-w-[1030px]">
        <div className="flex gap-8 flex-col">{children}</div>
      </div>
    </div>
  );
}
