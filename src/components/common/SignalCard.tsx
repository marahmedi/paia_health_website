type SignalProps = {
    icon: React.ElementType;
    label: string;
  };
  
  const SignalCard = ({ icon: Icon, label }: SignalProps) => {
    return (
      <div
        className="
          flex h-full flex-col items-center justify-center
          rounded-2xl bg-white/85
          px-6 py-8 sm:py-10
          text-center
          transition-all duration-300
          hover:bg-white hover:shadow-lg
        "
      >
        <Icon className="mb-4 h-7 w-7 sm:h-8 sm:w-8 text-[#461111]" />
        <span className="text-sm sm:text-base font-semibold text-[#461111]">
          {label}
        </span>
      </div>
    );
  };
  
  export default SignalCard;
  