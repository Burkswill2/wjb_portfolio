import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Work from "../containers/Work/Work";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/Work">
                <Work/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews