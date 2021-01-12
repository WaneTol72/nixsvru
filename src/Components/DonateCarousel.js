import React from 'react';
import {Button, Image} from "react-bootstrap";
import {HrefModal} from "./Modal";
import { slides } from '../description.js';


console.clear();

function useTilt(active) {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current || !active) {
            return;
        }

        const state = {
            rect: undefined,
            mouseX: undefined,
            mouseY: undefined
        };

        let el = ref.current;

        const handleMouseMove = (e) => {
            if (!el) {
                return;
            }
            if (!state.rect) {
                state.rect = el.getBoundingClientRect();
            }
            state.mouseX = e.clientX;
            state.mouseY = e.clientY;
            const px = (state.mouseX - state.rect.left) / state.rect.width;
            const py = (state.mouseY - state.rect.top) / state.rect.height;

            el.style.setProperty("--px", px);
            el.style.setProperty("--py", py);
        };

        el.addEventListener("mousemove", handleMouseMove);

        return () => {
            el.removeEventListener("mousemove", handleMouseMove);
        };
    }, [active]);

    return ref;
}

const initialState = {
    slideIndex: 0
};

const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
        return {
            ...state,
            slideIndex: (state.slideIndex + 1) % slides.length
        };
    }
    if (event.type === "PREV") {
        return {
            ...state,
            slideIndex:
                state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
    }
};

function Slide({ slide, offset}) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);

    return (
        <div
            ref={ref}
            className="slide"
            data-active={active}
            style={{
                "--offset": offset,
                "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
                opacity: offset > 1 ? 0 : offset < -1 ? 0 : 1,
            }}
        >
            <div
                className="slideBackground"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            />
            <div
                className="slideContent"
                style={{
                    backgroundImage: `url('${slide.image}')`
                }}
            >
                <div className="slideContentInner">
                    <Image
                        src={slide.picture}
                        className="donate_picture d-inline-block"
                        style={{verticalAlign: "sub"}}
                        alt="Logo-Donate"
                    />
                    <h2 className="slideTitle" style={{color: slide.titleColor}}>{slide.title}</h2>
                    <h3 className="slideSubtitle">{slide.subtitle}</h3>
                    <p className="slideDescription" style={{whiteSpace: "pre-line"}}>{slide.description}</p>
                    <p className="slideDescription">Цена: {slide.price} Руб.</p>
                    <Button size="lg" className="mb-2 mt-2 pr-5 pl-5 rounded-pill" variant="success" href="http://shop.nixsv.ru/">Купить</Button>
                    <HrefModal
                    className="slideDescription mb-5"
                    text={"Подробнее"}
                    title={"Полное описание " + slide.title}
                    fulldesc={slide.fulldesc}
                    perks={slide.perks}
                    commands={slide.commands}
                    pets={slide.pets}
                />
                </div>
            </div>
        </div>
    );
}

function DonateCarousel() {
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);

    return (
        <div className="slides">
            <button onClick={() => dispatch({ type: "NEXT" })}>‹</button>

            {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => dispatch({ type: "PREV" })}>›</button>
        </div>
    );
}

export default DonateCarousel;
