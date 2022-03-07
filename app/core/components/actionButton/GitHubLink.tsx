import { SiteDetails } from "../../../util/util";
import { ReactElement } from "react";
import { ActionIcon, Anchor } from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";
import { ActionButtonOptions } from "./interface/ActionButtonOptions";

/**
 * A component that links to the app's GitHub repository.
 */
export function GitHubLink({ filled = false }: ActionButtonOptions): ReactElement {
    return (
        <Anchor href={SiteDetails.links.github} target="_blank">
            <ActionIcon color="green" size="lg" variant={filled ? "filled" : "hover"} title="Visit the GitHub repository">
                <BrandGithub />
            </ActionIcon>
        </Anchor>
    );
}
