type HeadingProps = {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export default function Heading(prop: HeadingProps) {
  const Tag = `h${prop.level}` as keyof JSX.IntrinsicElements;
  const sizeMap = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-base",
  };
  return (
    <Tag className={`${sizeMap[prop.level]} font-bold`}>{prop.children}</Tag>
  );
}
