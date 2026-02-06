import React from 'react';

const SolutionHighlights = ({ cards, sectionTitle = "Solutions Highlights" }) => {
    return (
        <div className="min-h-screen bg-black text-white p-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center mb-10">
                    <span className="px-6 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-white/80">
                        {sectionTitle}
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((c, i) => (
                        <div
                            key={i}
                            className={`relative rounded-3xl p-8 shadow-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] flex flex-col
                        ${c.wide ? "md:col-span-2" : ""}
                        ${c.dark ? "bg-black text-white" : "bg-gradient-to-br from-gray-100 to-gray-300 text-black"}`}
                        >
                            <div className={`w-10 h-10 rounded-xl mb-6 shadow-lg bg-gradient-to-br transition-all duration-300
                                ${c.dark ? "from-white/90 to-white/1 border-6 border-white/20" : "from-black/90 to-black/40 border-6 border-black/20"}`}
                            />
                            <h3 className="text-2xl font-semibold mb-4 leading-snug">{c.title}</h3>
                            <p className={`text-sm leading-relaxed ${c.dark ? "text-gray-400" : "text-gray-700"}`}>{c.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SolutionHighlights;
