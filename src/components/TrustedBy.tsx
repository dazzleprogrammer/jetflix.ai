"use client";

import { cn } from "@/lib/utils";

const partners = [
  {
    name: "Phenom",
    logo: "https://logo.clearbit.com/phenom.com",
    testimonial: "We're now producing 30+ professional-grade product videos every month. What used to take hours can now be done in just 15 minutes.",
    person: {
      name: "Krish Ramineni",
      role: "Co-founder & CEO",
      avatar: "https://i.pravatar.cc/150?u=phenom"
    }
  },
  {
    name: "Samsara",
    logo: "https://logo.clearbit.com/samsara.com",
    testimonial: "Explaino has completely transformed our documentation process. The quality of videos is unmatched.",
    person: {
      name: "Sanjit Biswas",
      role: "CEO",
      avatar: "https://i.pravatar.cc/150?u=samsara"
    }
  },
  {
    name: "Smartsheet",
    logo: "https://logo.clearbit.com/smartsheet.com",
    testimonial: "The ability to update videos instantly when our UI changes is a game changer for our product team.",
    person: {
      name: "Mark Mader",
      role: "CEO",
      avatar: "https://i.pravatar.cc/150?u=smartsheet"
    }
  },
  {
    name: "Personio",
    logo: "https://logo.clearbit.com/personio.com",
    testimonial: "Our support tickets dropped by 40% after implementing video guides created with Explaino.",
    person: {
      name: "Hanno Renner",
      role: "Co-founder & CEO",
      avatar: "https://i.pravatar.cc/150?u=personio"
    }
  },
  {
    name: "UiPath",
    logo: "https://logo.clearbit.com/uipath.com",
    testimonial: "Automating our video creation workflow has saved us hundreds of hours this quarter alone.",
    person: {
      name: "Daniel Dines",
      role: "Co-CEO",
      avatar: "https://i.pravatar.cc/150?u=uipath"
    }
  },
  {
    name: "Duda",
    logo: "https://logo.clearbit.com/duda.co",
    testimonial: "The most intuitive video creation platform we've ever used. It just works.",
    person: {
      name: "Itai Sadan",
      role: "CEO",
      avatar: "https://i.pravatar.cc/150?u=duda"
    }
  },
  {
    name: "Darwinbox",
    logo: "https://logo.clearbit.com/darwinbox.com",
    testimonial: "We can now ship release videos properly on launch day. No more delays.",
    person: {
      name: "Chaitanya Peddi",
      role: "Co-founder",
      avatar: "https://i.pravatar.cc/150?u=darwinbox"
    }
  },
  {
    name: "Movable Ink",
    logo: "https://logo.clearbit.com/movableink.com",
    testimonial: "Explaino helps us maintain consistency across all our customer-facing video content.",
    person: {
      name: "Vivek Sharma",
      role: "CEO",
      avatar: "https://i.pravatar.cc/150?u=movableink"
    }
  },
];

const TrustedBy = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-5xl md:text-6xl font-heading font-bold text-foreground mb-20 animate-slide-up">
          Trusted by{" "}
          <span className="animate-gradient-text bg-gradient-to-r from-[#7194df] via-[#3b8ad0] to-[#5977db] bg-clip-text text-transparent bg-[length:200%_auto]">
            market leaders
          </span>
        </h2>

        {/* Unique Grid with Gradient Borders */}
        <div className="rounded-3xl overflow-hidden p-[2px] relative shadow-2xl shadow-blue-900/5">
          {/* Continuously Moving Glittering Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7194df] via-[#3b8ad0] to-[#5977db] animate-border-flow bg-[length:400%_400%] opacity-50" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-transparent relative z-10 rounded-3xl overflow-hidden">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative h-[320px] bg-card p-8 flex items-center justify-center transition-all duration-500 overflow-hidden animate-float"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                {/* Cloudy Animation Vibes on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7194df]/20 via-[#c5d5f0]/30 to-[#5977db]/20 blur-xl animate-mist-flow" />
                  <div className="absolute -inset-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent_60%)] animate-pulse opacity-50 blur-3xl" />
                </div>

                {/* Logo State (Default) */}
                <div className="absolute inset-0 flex items-center justify-center p-8 transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-90 z-10">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-16 w-auto opacity-70 grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-3xl font-bold text-muted-foreground">${partner.name}</span>`;
                    }}
                  />
                </div>

                {/* Testimonial State (Hover) */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 opacity-0 scale-95 translate-y-4 transition-all duration-700 delay-100 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 z-20">
                  <div className="text-base text-foreground/90 leading-relaxed font-medium drop-shadow-sm">
                    "{partner.testimonial}"
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <img
                      src={partner.person.avatar}
                      alt={partner.person.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#7194df] shadow-md"
                    />
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-foreground">
                        {partner.person.name}
                      </span>
                      <span className="text-sm text-[#5977db] font-medium">
                        {partner.person.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
