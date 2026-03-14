import Image from "next/image";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  reverse?: boolean;
}

export default function TeamMember({
  name,
  title,
  bio,
  imageSrc,
  reverse = false,
}: TeamMemberProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={`${reverse ? "lg:order-2" : ""}`}>
        <div className="relative aspect-square max-w-[300px] mx-auto lg:mx-0 rounded-xl overflow-hidden bg-kronos-card group">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 300px, 300px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl font-heading text-white/20">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>
      <div className={`${reverse ? "lg:order-1" : ""}`}>
        <h3 className="font-heading text-2xl lg:text-3xl text-white mb-2">
          {name}
        </h3>
        <p className="font-body text-kronos-cyan uppercase tracking-wider text-sm mb-4">
          {title}
        </p>
        <p className="font-body text-white/70 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
