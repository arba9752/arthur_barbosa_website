interface PlusPatternBackgroundProps {
	backgroundColor?: string;
	className?: string;
	style?: React.CSSProperties;
	fade?: boolean;
	[key: string]: any;
}

export const BackgroundPlus: React.FC<PlusPatternBackgroundProps> = ({
	backgroundColor = "black", // Set the background to black
	className,
	fade = true,
	style,
	...props
}) => {
	// Use radial gradients for purple highlights
	const maskStyle: React.CSSProperties = fade
		? {
				
			maskImage: "radial-gradient(circle, rgba(75,0,130,0.4), transparent)", // Dark purple mask highlight
			WebkitMaskImage: "radial-gradient(circle, rgba(75,0,130,0.4), transparent)",
			}
		: {};

	// Background color with purple highlights (without plus symbols)
	const backgroundStyle: React.CSSProperties = {
		backgroundColor,
		backgroundImage: `
			radial-gradient(circle at 20% 30%, rgba(120, 119, 198, 0.5), transparent),
			radial-gradient(circle at 70% 80%, rgba(120, 119, 198, 0.3), transparent)
		`,
		...maskStyle,
		...style,
	};

	return (
		<div
			className={`absolute inset-0 h-full w-full ${className}`}
			style={backgroundStyle}
			{...props}
		/>
	);
};

export default BackgroundPlus;
