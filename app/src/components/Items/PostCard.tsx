import React from 'react';

function PostCard() {
    return (
        <div className="p-4 max-w-sm">
            <div className="flex rounded-lg h-full bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                    <div
                        className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                    </div>
                    <h2 className="text-white text-lg font-medium">Feature 1</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                    <p className="leading-relaxed text-base text-white">Blue bottle crucifix vinyl post-ironic
                        four
                        dollar
                        toast vegan taxidermy. Gastropub indxgo juice poutine.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PostCard;