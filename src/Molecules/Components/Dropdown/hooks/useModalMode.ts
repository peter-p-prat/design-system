import {useMemo} from "react";

import {Breakpoints} from "@app/Foundations";
import {useDetectViewport} from "@app/shared";

interface Props {
    disableMobileModalMode?: boolean;
}

const useModalMode = ({disableMobileModalMode}: Props) => {
    const {viewport} = useDetectViewport();

    const modalMode = useMemo(
        () => !disableMobileModalMode && (viewport === Breakpoints.MOBILE || viewport === Breakpoints.TABLET),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [viewport],
    );
    const desktopMode = useMemo(() => !modalMode, [modalMode]);

    return {modalMode, desktopMode};
};

export default useModalMode;
