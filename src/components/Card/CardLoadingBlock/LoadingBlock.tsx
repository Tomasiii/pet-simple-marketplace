import ContentLoader from "react-content-loader";
import { FC } from "react";

const LoadingBlock: FC<{ className: string }> = () => (
    <ContentLoader
        speed={2}
        width={280}
        height={333}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="55" y="20" rx="6" ry="6" width="200" height="220" />
        <rect x="30" y="280" rx="6" ry="6" width="280" height="26" />
        <rect x="30" y="320" rx="6" ry="6" width="200" height="26" />
        <rect x="30" y="365" rx="6" ry="6" width="91" height="26" />
        <rect x="30" y="408" rx="6" ry="6" width="140" height="30" />
    </ContentLoader>
);

export default LoadingBlock;
