const SectionWrapper = ({
  children,
  className,
  title,
}: {
  children?: React.ReactNode;
  className?: string;
  title?: { header: string; description: string };
}) => {
  return (
    <div className={`relative flex-1 ${className}`}>
      {title && (
        <div className="text-center mt-12 mb-16 space-y-6 flex flex-col items-center">
          <h2 className="font-semibold text-2xl sm:text-3xl">{title.header}</h2>

          <p className="text-neutral-600 max-w-[300px] sm:max-w-[550px]">
            {title.description}
          </p>
        </div>
      )}

      {children}
    </div>
  );
};

export default SectionWrapper;
