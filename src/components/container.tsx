import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <div className="space-y-12">
      <div className="flex justify-center items-center pb-12">
        <div className="flex gap-8 flex-col">{children}</div>
      </div>
    </div>
  );
}
