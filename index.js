const MAX_HEX_COLOR = 16777215;
const getRandomColor = () => {
    return "#" + Math.floor(Math.random() * MAX_HEX_COLOR + 1).toString(16)
};

const getMaxChildren = (containerSize, childSize, numberOfChildren) => {
    // First of all we validate the inputs
    if (containerSize < 1) {
        throw new Error("Minimum value for containerSize is 1")
    }
    if (childSize < 1) {
        throw new Error("Mimimum value for childSize is 1")
    }
    if (numberOfChildren < 1) {
        throw new Error("It's required to have at least 1 child")
    }
    const maxChildrenFitting1Row = Math.floor(containerSize / childSize);
    const maxChildrenFittingContainer = maxChildrenFitting1Row * maxChildrenFitting1Row;
    if (maxChildrenFittingContainer < numberOfChildren) {
        if (maxChildrenFitting1Row > 0) {
            alert(`Only showing ${maxChildrenFittingContainer} since we can't fit all ${numberOfChildren} in the container`)
        } else {
            alert(`Not showing any children since they don't fit in the container`)
        }
    }
    return maxChildrenFittingContainer
}

const createChild = (childSize, container) => {
    let timer = undefined
    const child = document.createElement("div");
    child.style.height = childSize;
    child.style.width = childSize;
    child.style.backgroundColor = getRandomColor();
    child.style.float = "left";
    child.addEventListener("mouseenter", () => {
        child.style.backgroundColor = getRandomColor();
        timer = window.setTimeout(() => {
            container.removeChild(child);
        }, 2000);
    });
    child.addEventListener("mouseleave", () => {
        window.clearTimeout(timer);
    });
    return child;
}

const drawContainer = (containerSize, childSize, numberOfChildren) => {
    const maxChildren = getMaxChildren(containerSize, childSize, numberOfChildren)

    // Let's add units to the sizes
    containerSize = `${containerSize}px`;
    childSize = `${childSize}px`;

    const container = document.getElementById("mainSquare");
    container.style.height = containerSize;
    container.style.width = containerSize;

    for (let i = 0; i < maxChildren; i++) {
        const child = createChild(childSize, container);
        container.appendChild(child);
    }
};

window.addEventListener("load", () => {
    drawContainer(200, 50, 17);
    //drawContainer(413, 42, 30);
    //drawContainer(200, 300, 2);
});