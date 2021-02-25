import React, { useRef, useEffect, useState } from 'react';

const LandingPageBg = (props) => {
    const strokeColour = '#000000';

    const svgContainer = useRef('');
    const svgBody = useRef('');
    const svgChildRef = useRef('');

    const colour0 = '#f58f7c';
    const colour2 = '#f2c4ce';


    const initialColour = () => {
        svgChildRef.current.childNodes.forEach((el, i) => {
            if(el.id % 2 === 0) {
                setTimeout(() => {
                    el.style.stroke = strokeColour;
                    el.style.fill = colour0;
                    el.style.opacity = "0.4";
                }, i * 20)
            } else {
                setTimeout(() => {
                    el.style.stroke = strokeColour;
                    el.style.fill = colour2;
                    el.style.opacity = "0.4";
                }, i * 20)
            }
        })

        setTimeout(() => {
           props.setSvgLoaded(true); 
        }, 1000);

        requestAnimationFrame(initialColour);
    }

    useEffect(() => {
        setTimeout(() => {
            initialColour();
        }, 1000)

        
    }, [])


    return (
        <div ref={svgContainer} className="svgContainer">
        <svg className="svgBody" ref={svgBody} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" preserveAspectRatio="xMidYMid" viewBox="0 0 1098 927">
        <g  transform="translate(549,463.5) scale(1,1) translate(-549,-463.5)">
        <g ref={svgChildRef} id="bk-0.7621702857568275">
        <path d="M 623 419  L 667 595  L 608 532 Z" stroke="#000000" fill="transparent" className="svgEl" id={0} >
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 623 419  L 667 595  L 608 532 Z;M 570 465  L 547 528  L 657 421 Z;M 623 419  L 667 595  L 608 532 Z"></animate>
        </path>
        <path className="svgEl" id={1} d="M 623 419  L 625 505  L 667 595 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 623 419  L 625 505  L 667 595 Z;M 570 465  L 458 524  L 547 528 Z;M 623 419  L 625 505  L 667 595 Z"></animate>
        </path>
        <path className="svgEl" id={2} d="M 667 595  L 672 363  L 608 532 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 667 595  L 672 363  L 608 532 Z;M 547 528  L 586 393  L 657 421 Z;M 667 595  L 672 363  L 608 532 Z"></animate>
        </path>
        <path className="svgEl" id={3} d="M 663 600  L 706 589  L 667 595 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 663 600  L 706 589  L 667 595 Z;M 626 544  L 717 507  L 547 528 Z;M 663 600  L 706 589  L 667 595 Z"></animate>
        </path>
        <path className="svgEl" id={4} d="M 667 595  L 706 589  L 672 363 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 667 595  L 706 589  L 672 363 Z;M 547 528  L 717 507  L 586 393 Z;M 667 595  L 706 589  L 672 363 Z"></animate>
        </path>
        <path className="svgEl" id={5} d="M 485 493  L 496 537  L 625 505 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 485 493  L 496 537  L 625 505 Z;M 472 553  L 604 585  L 458 524 Z;M 485 493  L 496 537  L 625 505 Z"></animate>
        </path>
        <path className="svgEl" id={6} d="M 625 505  L 556 597  L 667 595 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 625 505  L 556 597  L 667 595 Z;M 458 524  L 531 545  L 547 528 Z;M 625 505  L 556 597  L 667 595 Z"></animate>
        </path>
        <path className="svgEl" id={7} d="M 496 537  L 556 597  L 625 505 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 496 537  L 556 597  L 625 505 Z;M 604 585  L 531 545  L 458 524 Z;M 496 537  L 556 597  L 625 505 Z"></animate>
        </path>
        <path className="svgEl" id={8} d="M 570 339  L 611 348  L 608 532 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 570 339  L 611 348  L 608 532 Z;M 609 356  L 533 403  L 657 421 Z;M 570 339  L 611 348  L 608 532 Z"></animate>
        </path>
        <path className="svgEl" id={9} d="M 608 532  L 611 348  L 623 419 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 608 532  L 611 348  L 623 419 Z;M 657 421  L 533 403  L 570 465 Z;M 608 532  L 611 348  L 623 419 Z"></animate>
        </path>
        <path className="svgEl" id={10} d="M 441 428  L 404 408  L 623 419 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 441 428  L 404 408  L 623 419 Z;M 580 343  L 519 476  L 570 465 Z;M 441 428  L 404 408  L 623 419 Z"></animate>
        </path>
        <path className="svgEl" id={11} d="M 623 419  L 546 546  L 625 505 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 623 419  L 546 546  L 625 505 Z;M 570 465  L 513 504  L 458 524 Z;M 623 419  L 546 546  L 625 505 Z"></animate>
        </path>
        <path className="svgEl" id={12} d="M 556 597  L 663 600  L 667 595 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 556 597  L 663 600  L 667 595 Z;M 531 545  L 626 544  L 547 528 Z;M 556 597  L 663 600  L 667 595 Z"></animate>
        </path>
        <path className="svgEl" id={13} d="M 404 408  L 546 546  L 623 419 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 404 408  L 546 546  L 623 419 Z;M 519 476  L 513 504  L 570 465 Z;M 404 408  L 546 546  L 623 419 Z"></animate>
        </path>
        <path className="svgEl" id={14} d="M 611 348  L 441 428  L 623 419 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 611 348  L 441 428  L 623 419 Z;M 533 403  L 580 343  L 570 465 Z;M 611 348  L 441 428  L 623 419 Z"></animate>
        </path>
        <path className="svgEl" id={15} d="M 763 417  L 570 339  L 672 363 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 763 417  L 570 339  L 672 363 Z;M 791 377  L 609 356  L 586 393 Z;M 763 417  L 570 339  L 672 363 Z"></animate>
        </path>
        <path className="svgEl" id={16} d="M 672 363  L 570 339  L 608 532 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 672 363  L 570 339  L 608 532 Z;M 586 393  L 609 356  L 657 421 Z;M 672 363  L 570 339  L 608 532 Z"></animate>
        </path>
        <path className="svgEl" id={17} d="M 611 348  L 585 382  L 441 428 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 611 348  L 585 382  L 441 428 Z;M 533 403  L 523 398  L 580 343 Z;M 611 348  L 585 382  L 441 428 Z"></animate>
        </path>
        <path className="svgEl" id={18} d="M 750 640  L 720 540  L 706 589 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 750 640  L 720 540  L 706 589 Z;M 759 630  L 701 429  L 717 507 Z;M 750 640  L 720 540  L 706 589 Z"></animate>
        </path>
        <path className="svgEl" id={19} d="M 706 589  L 720 540  L 672 363 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 706 589  L 720 540  L 672 363 Z;M 717 507  L 701 429  L 586 393 Z;M 706 589  L 720 540  L 672 363 Z"></animate>
        </path>
        <path className="svgEl" id={20} d="M 546 546  L 485 493  L 625 505 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 546 546  L 485 493  L 625 505 Z;M 513 504  L 472 553  L 458 524 Z;M 546 546  L 485 493  L 625 505 Z"></animate>
        </path>
        <path className="svgEl" id={21} d="M 720 540  L 672 407  L 672 363 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 720 540  L 672 407  L 672 363 Z;M 701 429  L 708 370  L 586 393 Z;M 720 540  L 672 407  L 672 363 Z"></animate>
        </path>
        <path className="svgEl" id={22} d="M 665 405  L 585 382  L 611 348 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 665 405  L 585 382  L 611 348 Z;M 630 405  L 523 398  L 533 403 Z;M 665 405  L 585 382  L 611 348 Z"></animate>
        </path>
        <path className="svgEl" id={23} d="M 441 428  L 545 306  L 404 408 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 441 428  L 545 306  L 404 408 Z;M 580 343  L 545 309  L 519 476 Z;M 441 428  L 545 306  L 404 408 Z"></animate>
        </path>
        <path className="svgEl" id={24} d="M 545 344  L 545 306  L 441 428 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 545 344  L 545 306  L 441 428 Z;M 474 361  L 545 309  L 580 343 Z;M 545 344  L 545 306  L 441 428 Z"></animate>
        </path>
        <path className="svgEl" id={25} d="M 358 365  L 435 462  L 546 546 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 358 365  L 435 462  L 546 546 Z;M 348 403  L 438 532  L 513 504 Z;M 358 365  L 435 462  L 546 546 Z"></animate>
        </path>
        <path className="svgEl" id={26} d="M 546 546  L 435 462  L 485 493 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 546 546  L 435 462  L 485 493 Z;M 513 504  L 438 532  L 472 553 Z;M 546 546  L 435 462  L 485 493 Z"></animate>
        </path>
        <path className="svgEl" id={27} d="M 515 611  L 587 653  L 496 537 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 515 611  L 587 653  L 496 537 Z;M 503 684  L 616 624  L 604 585 Z;M 515 611  L 587 653  L 496 537 Z"></animate>
        </path>
        <path className="svgEl" id={28} d="M 496 537  L 587 653  L 556 597 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 496 537  L 587 653  L 556 597 Z;M 604 585  L 616 624  L 531 545 Z;M 496 537  L 587 653  L 556 597 Z"></animate>
        </path>
        <path className="svgEl" id={29} d="M 556 597  L 591 682  L 663 600 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 556 597  L 591 682  L 663 600 Z;M 531 545  L 578 642  L 626 544 Z;M 556 597  L 591 682  L 663 600 Z"></animate>
        </path>
        <path className="svgEl" id={30} d="M 663 600  L 750 640  L 706 589 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 663 600  L 750 640  L 706 589 Z;M 626 544  L 759 630  L 717 507 Z;M 663 600  L 750 640  L 706 589 Z"></animate>
        </path>
        <path className="svgEl" id={31} d="M 570 339  L 665 405  L 611 348 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 570 339  L 665 405  L 611 348 Z;M 609 356  L 630 405  L 533 403 Z;M 570 339  L 665 405  L 611 348 Z"></animate>
        </path>
        <path className="svgEl" id={32} d="M 532 634  L 515 611  L 496 537 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 532 634  L 515 611  L 496 537 Z;M 507 561  L 503 684  L 604 585 Z;M 532 634  L 515 611  L 496 537 Z"></animate>
        </path>
        <path className="svgEl" id={33} d="M 358 365  L 546 546  L 404 408 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 358 365  L 546 546  L 404 408 Z;M 348 403  L 513 504  L 519 476 Z;M 358 365  L 546 546  L 404 408 Z"></animate>
        </path>
        <path className="svgEl" id={34} d="M 485 493  L 532 634  L 496 537 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 485 493  L 532 634  L 496 537 Z;M 472 553  L 507 561  L 604 585 Z;M 485 493  L 532 634  L 496 537 Z"></animate>
        </path>
        <path className="svgEl" id={35} d="M 591 682  L 750 640  L 663 600 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 591 682  L 750 640  L 663 600 Z;M 578 642  L 759 630  L 626 544 Z;M 591 682  L 750 640  L 663 600 Z"></animate>
        </path>
        <path className="svgEl" id={36} d="M 720 540  L 694 451  L 672 407 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 720 540  L 694 451  L 672 407 Z;M 701 429  L 783 477  L 708 370 Z;M 720 540  L 694 451  L 672 407 Z"></animate>
        </path>
        <path className="svgEl" id={37} d="M 775 429  L 763 417  L 672 407 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 775 429  L 763 417  L 672 407 Z;M 802 519  L 791 377  L 708 370 Z;M 775 429  L 763 417  L 672 407 Z"></animate>
        </path>
        <path className="svgEl" id={38} d="M 672 407  L 763 417  L 672 363 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 672 407  L 763 417  L 672 363 Z;M 708 370  L 791 377  L 586 393 Z;M 672 407  L 763 417  L 672 363 Z"></animate>
        </path>
        <path className="svgEl" id={39} d="M 570 339  L 703 279  L 665 405 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 570 339  L 703 279  L 665 405 Z;M 609 356  L 695 304  L 630 405 Z;M 570 339  L 703 279  L 665 405 Z"></animate>
        </path>
        <path className="svgEl" id={40} d="M 615 743  L 591 682  L 587 653 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 615 743  L 591 682  L 587 653 Z;M 695 604  L 578 642  L 616 624 Z;M 615 743  L 591 682  L 587 653 Z"></animate>
        </path>
        <path className="svgEl" id={41} d="M 587 653  L 591 682  L 556 597 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 587 653  L 591 682  L 556 597 Z;M 616 624  L 578 642  L 531 545 Z;M 587 653  L 591 682  L 556 597 Z"></animate>
        </path>
        <path className="svgEl" id={42} d="M 355 478  L 358 365  L 404 408 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 355 478  L 358 365  L 404 408 Z;M 468 444  L 348 403  L 519 476 Z;M 355 478  L 358 365  L 404 408 Z"></animate>
        </path>
        <path className="svgEl" id={43} d="M 759 298  L 703 279  L 570 339 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 759 298  L 703 279  L 570 339 Z;M 708 333  L 695 304  L 609 356 Z;M 759 298  L 703 279  L 570 339 Z"></animate>
        </path>
        <path className="svgEl" id={44} d="M 603 207  L 476 324  L 585 382 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 603 207  L 476 324  L 585 382 Z;M 589 219  L 462 321  L 523 398 Z;M 603 207  L 476 324  L 585 382 Z"></animate>
        </path>
        <path className="svgEl" id={45} d="M 378 711  L 532 634  L 485 493 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 378 711  L 532 634  L 485 493 Z;M 372 700  L 507 561  L 472 553 Z;M 378 711  L 532 634  L 485 493 Z"></animate>
        </path>
        <path className="svgEl" id={46} d="M 515 611  L 562 677  L 587 653 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 515 611  L 562 677  L 587 653 Z;M 503 684  L 574 721  L 616 624 Z;M 515 611  L 562 677  L 587 653 Z"></animate>
        </path>
        <path className="svgEl" id={47} d="M 414 368  L 355 478  L 545 306 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 414 368  L 355 478  L 545 306 Z;M 475 369  L 468 444  L 545 309 Z;M 414 368  L 355 478  L 545 306 Z"></animate>
        </path>
        <path className="svgEl" id={48} d="M 545 306  L 355 478  L 404 408 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 545 306  L 355 478  L 404 408 Z;M 545 309  L 468 444  L 519 476 Z;M 545 306  L 355 478  L 404 408 Z"></animate>
        </path>
        <path className="svgEl" id={49} d="M 476 324  L 545 344  L 585 382 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 476 324  L 545 344  L 585 382 Z;M 462 321  L 474 361  L 523 398 Z;M 476 324  L 545 344  L 585 382 Z"></animate>
        </path>
        {/* <path className="svgEl" id={50} d="M 585 382  L 545 344  L 441 428 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 585 382  L 545 344  L 441 428 Z;M 523 398  L 474 361  L 580 343 Z;M 585 382  L 545 344  L 441 428 Z"></animate>
        </path>
        <path className="svgEl" id={51} d="M 345 499  L 494 590  L 435 462 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 345 499  L 494 590  L 435 462 Z;M 358 521  L 372 490  L 438 532 Z;M 345 499  L 494 590  L 435 462 Z"></animate>
        </path>
        <path className="svgEl" id={52} d="M 435 462  L 494 590  L 485 493 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 435 462  L 494 590  L 485 493 Z;M 438 532  L 372 490  L 472 553 Z;M 435 462  L 494 590  L 485 493 Z"></animate>
        </path>
        <path className="svgEl" id={53} d="M 732 570  L 720 540  L 750 640 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 732 570  L 720 540  L 750 640 Z;M 689 479  L 701 429  L 759 630 Z;M 732 570  L 720 540  L 750 640 Z"></animate>
        </path>
        <path className="svgEl" id={54} d="M 732 570  L 694 451  L 720 540 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 732 570  L 694 451  L 720 540 Z;M 689 479  L 783 477  L 701 429 Z;M 732 570  L 694 451  L 720 540 Z"></animate>
        </path>
        <path className="svgEl" id={55} d="M 694 451  L 775 429  L 672 407 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 694 451  L 775 429  L 672 407 Z;M 783 477  L 802 519  L 708 370 Z;M 694 451  L 775 429  L 672 407 Z"></animate>
        </path>
        <path className="svgEl" id={56} d="M 485 721  L 562 677  L 515 611 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 485 721  L 562 677  L 515 611 Z;M 561 747  L 574 721  L 503 684 Z;M 485 721  L 562 677  L 515 611 Z"></animate>
        </path>
        <path className="svgEl" id={57} d="M 766 556  L 750 640  L 591 682 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 766 556  L 750 640  L 591 682 Z;M 740 689  L 759 630  L 578 642 Z;M 766 556  L 750 640  L 591 682 Z"></animate>
        </path>
        <path className="svgEl" id={58} d="M 766 556  L 732 570  L 750 640 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 766 556  L 732 570  L 750 640 Z;M 740 689  L 689 479  L 759 630 Z;M 766 556  L 732 570  L 750 640 Z"></animate>
        </path>
        <path className="svgEl" id={59} d="M 826 311  L 759 298  L 763 417 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 826 311  L 759 298  L 763 417 Z;M 788 385  L 708 333  L 791 377 Z;M 826 311  L 759 298  L 763 417 Z"></animate>
        </path>
        <path className="svgEl" id={60} d="M 763 417  L 759 298  L 570 339 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 763 417  L 759 298  L 570 339 Z;M 791 377  L 708 333  L 609 356 Z;M 763 417  L 759 298  L 570 339 Z"></animate>
        </path>
        <path className="svgEl" id={61} d="M 603 207  L 665 405  L 703 279 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 603 207  L 665 405  L 703 279 Z;M 589 219  L 630 405  L 695 304 Z;M 603 207  L 665 405  L 703 279 Z"></animate>
        </path>
        <path className="svgEl" id={63} d="M 386 694  L 485 721  L 532 634 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 386 694  L 485 721  L 532 634 Z;M 533 742  L 561 747  L 507 561 Z;M 386 694  L 485 721  L 532 634 Z"></animate>
        </path>
        <path className="svgEl" id={64} d="M 532 634  L 485 721  L 515 611 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 532 634  L 485 721  L 515 611 Z;M 507 561  L 561 747  L 503 684 Z;M 532 634  L 485 721  L 515 611 Z"></animate>
        </path>
        <path className="svgEl" id={65} d="M 607 222  L 603 207  L 703 279 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 607 222  L 603 207  L 703 279 Z;M 663 347  L 589 219  L 695 304 Z;M 607 222  L 603 207  L 703 279 Z"></animate>
        </path>
        <path className="svgEl" id={66} d="M 692 741  L 615 743  L 684 769 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 692 741  L 615 743  L 684 769 Z;M 671 619  L 695 604  L 654 780 Z;M 692 741  L 615 743  L 684 769 Z"></animate>
        </path>
        <path className="svgEl" id={67} d="M 562 677  L 615 743  L 587 653 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 562 677  L 615 743  L 587 653 Z;M 574 721  L 695 604  L 616 624 Z;M 562 677  L 615 743  L 587 653 Z"></animate>
        </path>
        <path className="svgEl" id={68} d="M 692 741  L 766 556  L 591 682 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 692 741  L 766 556  L 591 682 Z;M 671 619  L 740 689  L 578 642 Z;M 692 741  L 766 556  L 591 682 Z"></animate>
        </path>
        <path className="svgEl" id={69} d="M 902 316  L 813 365  L 775 429 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 902 316  L 813 365  L 775 429 Z;M 826 465  L 803 394  L 802 519 Z;M 902 316  L 813 365  L 775 429 Z"></animate>
        </path>
        <path className="svgEl" id={70} d="M 775 429  L 813 365  L 763 417 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 775 429  L 813 365  L 763 417 Z;M 802 519  L 803 394  L 791 377 Z;M 775 429  L 813 365  L 763 417 Z"></animate>
        </path>
        <path className="svgEl" id={71} d="M 494 590  L 378 711  L 485 493 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 494 590  L 378 711  L 485 493 Z;M 372 490  L 372 700  L 472 553 Z;M 494 590  L 378 711  L 485 493 Z"></animate>
        </path>
        <path className="svgEl" id={72} d="M 465 288  L 414 368  L 545 344 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 465 288  L 414 368  L 545 344 Z;M 437 311  L 475 369  L 474 361 Z;M 465 288  L 414 368  L 545 344 Z"></animate>
        </path>
        <path className="svgEl" id={73} d="M 545 344  L 414 368  L 545 306 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 545 344  L 414 368  L 545 306 Z;M 474 361  L 475 369  L 545 309 Z;M 545 344  L 414 368  L 545 306 Z"></animate>
        </path>
        <path className="svgEl" id={74} d="M 288 420  L 440 397  L 358 365 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 288 420  L 440 397  L 358 365 Z;M 429 309  L 298 494  L 348 403 Z;M 288 420  L 440 397  L 358 365 Z"></animate>
        </path>
        <path className="svgEl" id={75} d="M 288 420  L 358 365  L 355 478 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 288 420  L 358 365  L 355 478 Z;M 429 309  L 348 403  L 468 444 Z;M 288 420  L 358 365  L 355 478 Z"></animate>
        </path>
        <path className="svgEl" id={76} d="M 358 365  L 345 499  L 435 462 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 358 365  L 345 499  L 435 462 Z;M 348 403  L 358 521  L 438 532 Z;M 358 365  L 345 499  L 435 462 Z"></animate>
        </path>
        <path className="svgEl" id={77} d="M 494 590  L 281 636  L 378 711 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 494 590  L 281 636  L 378 711 Z;M 372 490  L 359 632  L 372 700 Z;M 494 590  L 281 636  L 378 711 Z"></animate>
        </path>
        <path className="svgEl" id={78} d="M 685 330  L 607 222  L 759 298 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 685 330  L 607 222  L 759 298 Z;M 676 345  L 663 347  L 708 333 Z;M 685 330  L 607 222  L 759 298 Z"></animate>
        </path>
        <path className="svgEl" id={79} d="M 759 298  L 607 222  L 703 279 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 759 298  L 607 222  L 703 279 Z;M 708 333  L 663 347  L 695 304 Z;M 759 298  L 607 222  L 703 279 Z"></animate>
        </path>
        <path className="svgEl" id={80} d="M 378 711  L 386 694  L 532 634 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 378 711  L 386 694  L 532 634 Z;M 372 700  L 533 742  L 507 561 Z;M 378 711  L 386 694  L 532 634 Z"></animate>
        </path>
        <path className="svgEl" id={81} d="M 440 397  L 345 499  L 358 365 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 440 397  L 345 499  L 358 365 Z;M 298 494  L 358 521  L 348 403 Z;M 440 397  L 345 499  L 358 365 Z"></animate>
        </path>
        <path className="svgEl" id={82} d="M 345 499  L 424 632  L 494 590 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 345 499  L 424 632  L 494 590 Z;M 358 521  L 295 549  L 372 490 Z;M 345 499  L 424 632  L 494 590 Z"></animate>
        </path>
        <path className="svgEl" id={83} d="M 378 711  L 467 722  L 386 694 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 378 711  L 467 722  L 386 694 Z;M 372 700  L 488 734  L 533 742 Z;M 378 711  L 467 722  L 386 694 Z"></animate>
        </path>
        <path className="svgEl" id={84} d="M 474 171  L 465 288  L 476 324 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 474 171  L 465 288  L 476 324 Z;M 545 198  L 437 311  L 462 321 Z;M 474 171  L 465 288  L 476 324 Z"></animate>
        </path>
        <path className="svgEl" id={85} d="M 476 324  L 465 288  L 545 344 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 476 324  L 465 288  L 545 344 Z;M 462 321  L 437 311  L 474 361 Z;M 476 324  L 465 288  L 545 344 Z"></animate>
        </path>
        <path className="svgEl" id={86} d="M 476 160  L 476 324  L 603 207 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 476 160  L 476 324  L 603 207 Z;M 596 278  L 462 321  L 589 219 Z;M 476 160  L 476 324  L 603 207 Z"></animate>
        </path>
        <path className="svgEl" id={87} d="M 399 401  L 355 478  L 414 368 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 399 401  L 355 478  L 414 368 Z;M 432 355  L 468 444  L 475 369 Z;M 399 401  L 355 478  L 414 368 Z"></animate>
        </path>
        <path className="svgEl" id={88} d="M 399 401  L 288 420  L 355 478 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 399 401  L 288 420  L 355 478 Z;M 432 355  L 429 309  L 468 444 Z;M 399 401  L 288 420  L 355 478 Z"></animate>
        </path>
        <path className="svgEl" id={89} d="M 440 397  L 385 502  L 345 499 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 440 397  L 385 502  L 345 499 Z;M 298 494  L 309 470  L 358 521 Z;M 440 397  L 385 502  L 345 499 Z"></animate>
        </path>
        <path className="svgEl" id={90} d="M 732 570  L 836 426  L 694 451 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 732 570  L 836 426  L 694 451 Z;M 689 479  L 874 460  L 783 477 Z;M 732 570  L 836 426  L 694 451 Z"></animate>
        </path>
        <path className="svgEl" id={91} d="M 694 451  L 836 426  L 775 429 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 694 451  L 836 426  L 775 429 Z;M 783 477  L 874 460  L 802 519 Z;M 694 451  L 836 426  L 775 429 Z"></animate>
        </path>
        <path className="svgEl" id={92} d="M 786 596  L 836 426  L 732 570 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 786 596  L 836 426  L 732 570 Z;M 750 489  L 874 460  L 689 479 Z;M 786 596  L 836 426  L 732 570 Z"></animate>
        </path>
        <path className="svgEl" id={93} d="M 902 316  L 826 311  L 813 365 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 902 316  L 826 311  L 813 365 Z;M 826 465  L 788 385  L 803 394 Z;M 902 316  L 826 311  L 813 365 Z"></animate>
        </path>
        <path className="svgEl" id={94} d="M 813 365  L 826 311  L 763 417 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 813 365  L 826 311  L 763 417 Z;M 803 394  L 788 385  L 791 377 Z;M 813 365  L 826 311  L 763 417 Z"></animate>
        </path>
        <path className="svgEl" id={95} d="M 826 311  L 685 330  L 759 298 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 826 311  L 685 330  L 759 298 Z;M 788 385  L 676 345  L 708 333 Z;M 826 311  L 685 330  L 759 298 Z"></animate>
        </path>
        <path className="svgEl" id={96} d="M 512 765  L 615 743  L 562 677 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 512 765  L 615 743  L 562 677 Z;M 595 801  L 695 604  L 574 721 Z;M 512 765  L 615 743  L 562 677 Z"></animate>
        </path>
        <path className="svgEl" id={97} d="M 615 743  L 692 741  L 591 682 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 615 743  L 692 741  L 591 682 Z;M 695 604  L 671 619  L 578 642 Z;M 615 743  L 692 741  L 591 682 Z"></animate>
        </path>
        <path className="svgEl" id={98} d="M 766 556  L 752 649  L 732 570 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 766 556  L 752 649  L 732 570 Z;M 740 689  L 718 664  L 689 479 Z;M 766 556  L 752 649  L 732 570 Z"></animate>
        </path>
        <path className="svgEl" id={99} d="M 694 664  L 752 649  L 766 556 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 694 664  L 752 649  L 766 556 Z;M 754 738  L 718 664  L 740 689 Z;M 694 664  L 752 649  L 766 556 Z"></animate>
        </path>
        <path className="svgEl" id={100} d="M 340 318  L 399 401  L 414 368 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 340 318  L 399 401  L 414 368 Z;M 368 351  L 432 355  L 475 369 Z;M 340 318  L 399 401  L 414 368 Z"></animate>
        </path>
        <path className="svgEl" id={101} d="M 836 426  L 780 423  L 775 429 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 836 426  L 780 423  L 775 429 Z;M 874 460  L 842 430  L 802 519 Z;M 836 426  L 780 423  L 775 429 Z"></animate>
        </path>
        <path className="svgEl" id={102} d="M 281 636  L 467 722  L 378 711 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 281 636  L 467 722  L 378 711 Z;M 359 632  L 488 734  L 372 700 Z;M 281 636  L 467 722  L 378 711 Z"></animate>
        </path>
        <path className="svgEl" id={103} d="M 386 694  L 447 785  L 485 721 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 386 694  L 447 785  L 485 721 Z;M 533 742  L 590 773  L 561 747 Z;M 386 694  L 447 785  L 485 721 Z"></animate>
        </path>
        <path className="svgEl" id={104} d="M 497 724  L 447 785  L 386 694 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 497 724  L 447 785  L 386 694 Z;M 423 716  L 590 773  L 533 742 Z;M 497 724  L 447 785  L 386 694 Z"></animate>
        </path>
        <path className="svgEl" id={105} d="M 485 721  L 512 765  L 562 677 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 485 721  L 512 765  L 562 677 Z;M 561 747  L 595 801  L 574 721 Z;M 485 721  L 512 765  L 562 677 Z"></animate>
        </path>
        <path className="svgEl" id={106} d="M 294 558  L 281 636  L 424 632 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 294 558  L 281 636  L 424 632 Z;M 304 585  L 359 632  L 295 549 Z;M 294 558  L 281 636  L 424 632 Z"></animate>
        </path>
        <path className="svgEl" id={107} d="M 424 632  L 281 636  L 494 590 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 424 632  L 281 636  L 494 590 Z;M 295 549  L 359 632  L 372 490 Z;M 424 632  L 281 636  L 494 590 Z"></animate>
        </path>
        <path className="svgEl" id={108} d="M 447 785  L 512 765  L 485 721 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 447 785  L 512 765  L 485 721 Z;M 590 773  L 595 801  L 561 747 Z;M 447 785  L 512 765  L 485 721 Z"></animate>
        </path>
        <path className="svgEl" id={109} d="M 752 649  L 786 596  L 732 570 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 752 649  L 786 596  L 732 570 Z;M 718 664  L 750 489  L 689 479 Z;M 752 649  L 786 596  L 732 570 Z"></animate>
        </path>
        <path className="svgEl" id={110} d="M 836 426  L 925 519  L 780 423 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 836 426  L 925 519  L 780 423 Z;M 874 460  L 819 495  L 842 430 Z;M 836 426  L 925 519  L 780 423 Z"></animate>
        </path>
        <path className="svgEl" id={111} d="M 465 288  L 381 327  L 414 368 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 465 288  L 381 327  L 414 368 Z;M 437 311  L 389 294  L 475 369 Z;M 465 288  L 381 327  L 414 368 Z"></animate>
        </path>
        <path className="svgEl" id={112} d="M 651 259  L 603 207  L 607 222 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 651 259  L 603 207  L 607 222 Z;M 513 279  L 589 219  L 663 347 Z;M 651 259  L 603 207  L 607 222 Z"></animate>
        </path>
        <path className="svgEl" id={113} d="M 651 259  L 476 160  L 603 207 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 651 259  L 476 160  L 603 207 Z;M 513 279  L 596 278  L 589 219 Z;M 651 259  L 476 160  L 603 207 Z"></animate>
        </path>
        <path className="svgEl" id={114} d="M 465 288  L 396 151  L 381 327 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 465 288  L 396 151  L 381 327 Z;M 437 311  L 390 304  L 389 294 Z;M 465 288  L 396 151  L 381 327 Z"></animate>
        </path>
        <path className="svgEl" id={115} d="M 672 248  L 651 259  L 607 222 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 672 248  L 651 259  L 607 222 Z;M 621 227  L 513 279  L 663 347 Z;M 672 248  L 651 259  L 607 222 Z"></animate>
        </path>
        <path className="svgEl" id={116} d="M 780 423  L 902 316  L 775 429 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 780 423  L 902 316  L 775 429 Z;M 842 430  L 826 465  L 802 519 Z;M 780 423  L 902 316  L 775 429 Z"></animate>
        </path>
        <path className="svgEl" id={117} d="M 292 330  L 440 397  L 288 420 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 292 330  L 440 397  L 288 420 Z;M 343 443  L 298 494  L 429 309 Z;M 292 330  L 440 397  L 288 420 Z"></animate>
        </path>
        <path className="svgEl" id={118} d="M 292 330  L 385 502  L 440 397 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 292 330  L 385 502  L 440 397 Z;M 343 443  L 309 470  L 298 494 Z;M 292 330  L 385 502  L 440 397 Z"></animate>
        </path>
        <path className="svgEl" id={119} d="M 345 499  L 340 509  L 424 632 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 345 499  L 340 509  L 424 632 Z;M 358 521  L 348 565  L 295 549 Z;M 345 499  L 340 509  L 424 632 Z"></animate>
        </path>
        <path className="svgEl" id={120} d="M 685 330  L 672 248  L 607 222 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 685 330  L 672 248  L 607 222 Z;M 676 345  L 621 227  L 663 347 Z;M 685 330  L 672 248  L 607 222 Z"></animate>
        </path>
        <path className="svgEl" id={121} d="M 467 722  L 497 724  L 386 694 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 467 722  L 497 724  L 386 694 Z;M 488 734  L 423 716  L 533 742 Z;M 467 722  L 497 724  L 386 694 Z"></animate>
        </path>
        <path className="svgEl" id={122} d="M 503 819  L 664 811  L 512 765 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 503 819  L 664 811  L 512 765 Z;M 547 737  L 535 713  L 595 801 Z;M 503 819  L 664 811  L 512 765 Z"></animate>
        </path>
        <path className="svgEl" id={123} d="M 519 88  L 474 171  L 476 160 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 519 88  L 474 171  L 476 160 Z;M 534 152  L 545 198  L 596 278 Z;M 519 88  L 474 171  L 476 160 Z"></animate>
        </path>
        <path className="svgEl" id={124} d="M 476 160  L 474 171  L 476 324 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 476 160  L 474 171  L 476 324 Z;M 596 278  L 545 198  L 462 321 Z;M 476 160  L 474 171  L 476 324 Z"></animate>
        </path>
        <path className="svgEl" id={125} d="M 664 811  L 728 789  L 512 765 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 664 811  L 728 789  L 512 765 Z;M 535 713  L 724 661  L 595 801 Z;M 664 811  L 728 789  L 512 765 Z"></animate>
        </path>
        <path className="svgEl" id={126} d="M 512 765  L 728 789  L 615 743 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 512 765  L 728 789  L 615 743 Z;M 595 801  L 724 661  L 695 604 Z;M 512 765  L 728 789  L 615 743 Z"></animate>
        </path>
        <path className="svgEl" id={127} d="M 692 741  L 694 664  L 766 556 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 692 741  L 694 664  L 766 556 Z;M 671 619  L 754 738  L 740 689 Z;M 692 741  L 694 664  L 766 556 Z"></animate>
        </path>
        <path className="svgEl" id={128} d="M 253 252  L 288 420  L 399 401 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 253 252  L 288 420  L 399 401 Z;M 225 309  L 429 309  L 432 355 Z;M 253 252  L 288 420  L 399 401 Z"></animate>
        </path>
        <path className="svgEl" id={129} d="M 253 252  L 292 330  L 288 420 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 253 252  L 292 330  L 288 420 Z;M 225 309  L 343 443  L 429 309 Z;M 253 252  L 292 330  L 288 420 Z"></animate>
        </path>
        <path className="svgEl" id={130} d="M 772 736  L 694 664  L 692 741 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 772 736  L 694 664  L 692 741 Z;M 759 699  L 754 738  L 671 619 Z;M 772 736  L 694 664  L 692 741 Z"></animate>
        </path>
        <path className="svgEl" id={131} d="M 752 649  L 906 636  L 786 596 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 752 649  L 906 636  L 786 596 Z;M 718 664  L 758 681  L 750 489 Z;M 752 649  L 906 636  L 786 596 Z"></animate>
        </path>
        <path className="svgEl" id={132} d="M 297 500  L 297 508  L 385 502 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 297 500  L 297 508  L 385 502 Z;M 182 402  L 241 483  L 309 470 Z;M 297 500  L 297 508  L 385 502 Z"></animate>
        </path>
        <path className="svgEl" id={133} d="M 385 502  L 297 508  L 345 499 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 385 502  L 297 508  L 345 499 Z;M 309 470  L 241 483  L 358 521 Z;M 385 502  L 297 508  L 345 499 Z"></animate>
        </path>
        <path className="svgEl" id={134} d="M 799 353  L 782 244  L 826 311 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 799 353  L 782 244  L 826 311 Z;M 874 218  L 729 228  L 788 385 Z;M 799 353  L 782 244  L 826 311 Z"></animate>
        </path>
        <path className="svgEl" id={135} d="M 826 311  L 782 244  L 685 330 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 826 311  L 782 244  L 685 330 Z;M 788 385  L 729 228  L 676 345 Z;M 826 311  L 782 244  L 685 330 Z"></animate>
        </path>
        <path className="svgEl" id={136} d="M 685 330  L 701 235  L 672 248 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 685 330  L 701 235  L 672 248 Z;M 676 345  L 637 225  L 621 227 Z;M 685 330  L 701 235  L 672 248 Z"></animate>
        </path>
        <path className="svgEl" id={137} d="M 728 789  L 684 769  L 615 743 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 728 789  L 684 769  L 615 743 Z;M 724 661  L 654 780  L 695 604 Z;M 728 789  L 684 769  L 615 743 Z"></animate>
        </path>
        <path className="svgEl" id={138} d="M 424 304  L 340 318  L 381 327 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 424 304  L 340 318  L 381 327 Z;M 380 184  L 368 351  L 389 294 Z;M 424 304  L 340 318  L 381 327 Z"></animate>
        </path>
        <path className="svgEl" id={139} d="M 381 327  L 340 318  L 414 368 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 381 327  L 340 318  L 414 368 Z;M 389 294  L 368 351  L 475 369 Z;M 381 327  L 340 318  L 414 368 Z"></animate>
        </path>
        <path className="svgEl" id={140} d="M 297 508  L 340 509  L 345 499 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 297 508  L 340 509  L 345 499 Z;M 241 483  L 348 565  L 358 521 Z;M 297 508  L 340 509  L 345 499 Z"></animate>
        </path>
        <path className="svgEl" id={141} d="M 281 636  L 324 636  L 467 722 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 281 636  L 324 636  L 467 722 Z;M 359 632  L 327 714  L 488 734 Z;M 281 636  L 324 636  L 467 722 Z"></animate>
        </path>
        <path className="svgEl" id={142} d="M 800 366  L 872 263  L 902 316 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 800 366  L 872 263  L 902 316 Z;M 939 362  L 828 380  L 826 465 Z;M 800 366  L 872 263  L 902 316 Z"></animate>
        </path>
        <path className="svgEl" id={143} d="M 902 316  L 872 263  L 826 311 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 902 316  L 872 263  L 826 311 Z;M 826 465  L 828 380  L 788 385 Z;M 902 316  L 872 263  L 826 311 Z"></animate>
        </path>
        <path className="svgEl" id={144} d="M 800 366  L 902 316  L 780 423 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 800 366  L 902 316  L 780 423 Z;M 939 362  L 826 465  L 842 430 Z;M 800 366  L 902 316  L 780 423 Z"></animate>
        </path>
        <path className="svgEl" id={145} d="M 474 171  L 396 151  L 465 288 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 474 171  L 396 151  L 465 288 Z;M 545 198  L 390 304  L 437 311 Z;M 474 171  L 396 151  L 465 288 Z"></animate>
        </path>
        <path className="svgEl" id={146} d="M 294 558  L 324 636  L 281 636 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 294 558  L 324 636  L 281 636 Z;M 304 585  L 327 714  L 359 632 Z;M 294 558  L 324 636  L 281 636 Z"></animate>
        </path>
        <path className="svgEl" id={147} d="M 467 722  L 404 727  L 497 724 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 467 722  L 404 727  L 497 724 Z;M 488 734  L 417 720  L 423 716 Z;M 467 722  L 404 727  L 497 724 Z"></animate>
        </path>
        <path className="svgEl" id={148} d="M 860 710  L 906 636  L 752 649 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 860 710  L 906 636  L 752 649 Z;M 827 635  L 758 681  L 718 664 Z;M 860 710  L 906 636  L 752 649 Z"></animate>
        </path>
        <path className="svgEl" id={149} d="M 786 596  L 925 519  L 836 426 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 786 596  L 925 519  L 836 426 Z;M 750 489  L 819 495  L 874 460 Z;M 786 596  L 925 519  L 836 426 Z"></animate>
        </path>
        <path className="svgEl" id={150} d="M 860 710  L 752 649  L 694 664 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 860 710  L 752 649  L 694 664 Z;M 827 635  L 718 664  L 754 738 Z;M 860 710  L 752 649  L 694 664 Z"></animate>
        </path>
        <path className="svgEl" id={151} d="M 775 280  L 701 235  L 685 330 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 775 280  L 701 235  L 685 330 Z;M 760 201  L 637 225  L 676 345 Z;M 775 280  L 701 235  L 685 330 Z"></animate>
        </path>
        <path className="svgEl" id={152} d="M 717 85  L 540 95  L 651 259 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 717 85  L 540 95  L 651 259 Z;M 686 143  L 555 200  L 513 279 Z;M 717 85  L 540 95  L 651 259 Z"></animate>
        </path>
        <path className="svgEl" id={153} d="M 651 259  L 540 95  L 476 160 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 651 259  L 540 95  L 476 160 Z;M 513 279  L 555 200  L 596 278 Z;M 651 259  L 540 95  L 476 160 Z"></animate>
        </path>
        <path className="svgEl" id={154} d="M 340 509  L 294 558  L 424 632 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 340 509  L 294 558  L 424 632 Z;M 348 565  L 304 585  L 295 549 Z;M 340 509  L 294 558  L 424 632 Z"></animate>
        </path>
        <path className="svgEl" id={155} d="M 333 809  L 404 727  L 467 722 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 333 809  L 404 727  L 467 722 Z;M 356 735  L 417 720  L 488 734 Z;M 333 809  L 404 727  L 467 722 Z"></animate>
        </path>
        <path className="svgEl" id={156} d="M 503 819  L 512 765  L 447 785 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 503 819  L 512 765  L 447 785 Z;M 547 737  L 595 801  L 590 773 Z;M 503 819  L 512 765  L 447 785 Z"></animate>
        </path>
        <path className="svgEl" id={157} d="M 333 809  L 467 722  L 324 636 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 333 809  L 467 722  L 324 636 Z;M 356 735  L 488 734  L 327 714 Z;M 333 809  L 467 722  L 324 636 Z"></animate>
        </path>
        <path className="svgEl" id={158} d="M 795 548  L 925 519  L 786 596 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 795 548  L 925 519  L 786 596 Z;M 850 535  L 819 495  L 750 489 Z;M 795 548  L 925 519  L 786 596 Z"></animate>
        </path>
        <path className="svgEl" id={159} d="M 253 201  L 253 252  L 340 318 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 253 201  L 253 252  L 340 318 Z;M 304 203  L 225 309  L 368 351 Z;M 253 201  L 253 252  L 340 318 Z"></animate>
        </path>
        <path className="svgEl" id={160} d="M 340 318  L 253 252  L 399 401 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 340 318  L 253 252  L 399 401 Z;M 368 351  L 225 309  L 432 355 Z;M 340 318  L 253 252  L 399 401 Z"></animate>
        </path>
        <path className="svgEl" id={161} d="M 292 330  L 297 500  L 385 502 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 292 330  L 297 500  L 385 502 Z;M 343 443  L 182 402  L 309 470 Z;M 292 330  L 297 500  L 385 502 Z"></animate>
        </path>
        <path className="svgEl" id={162} d="M 503 819  L 447 785  L 558 860 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 503 819  L 447 785  L 558 860 Z;M 547 737  L 590 773  L 426 824 Z;M 503 819  L 447 785  L 558 860 Z"></animate>
        </path>
        <path className="svgEl" id={163} d="M 728 789  L 624 817  L 684 769 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 728 789  L 624 817  L 684 769 Z;M 724 661  L 622 769  L 654 780 Z;M 728 789  L 624 817  L 684 769 Z"></animate>
        </path>
        <path className="svgEl" id={164} d="M 925 519  L 968 494  L 780 423 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 925 519  L 968 494  L 780 423 Z;M 819 495  L 898 432  L 842 430 Z;M 925 519  L 968 494  L 780 423 Z"></animate>
        </path>
        <path className="svgEl" id={165} d="M 918 582  L 795 548  L 786 596 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 918 582  L 795 548  L 786 596 Z;M 853 603  L 850 535  L 750 489 Z;M 918 582  L 795 548  L 786 596 Z"></animate>
        </path>
        <path className="svgEl" id={166} d="M 950 569  L 878 466  L 968 494 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 950 569  L 878 466  L 968 494 Z;M 914 582  L 884 533  L 898 432 Z;M 950 569  L 878 466  L 968 494 Z"></animate>
        </path>
        <path className="svgEl" id={167} d="M 717 85  L 651 259  L 672 248 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 717 85  L 651 259  L 672 248 Z;M 686 143  L 513 279  L 621 227 Z;M 717 85  L 651 259  L 672 248 Z"></animate>
        </path>
        <path className="svgEl" id={168} d="M 474 171  L 519 88  L 396 151 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 474 171  L 519 88  L 396 151 Z;M 545 198  L 534 152  L 390 304 Z;M 474 171  L 519 88  L 396 151 Z"></animate>
        </path>
        <path className="svgEl" id={169} d="M 558 860  L 447 785  L 497 724 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 558 860  L 447 785  L 497 724 Z;M 426 824  L 590 773  L 423 716 Z;M 558 860  L 447 785  L 497 724 Z"></animate>
        </path>
        <path className="svgEl" id={170} d="M 968 494  L 800 366  L 780 423 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 968 494  L 800 366  L 780 423 Z;M 898 432  L 939 362  L 842 430 Z;M 968 494  L 800 366  L 780 423 Z"></animate>
        </path>
        <path className="svgEl" id={171} d="M 188 431  L 297 500  L 292 330 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 188 431  L 297 500  L 292 330 Z;M 271 470  L 182 402  L 343 443 Z;M 188 431  L 297 500  L 292 330 Z"></animate>
        </path>
        <path className="svgEl" id={172} d="M 297 508  L 233 544  L 340 509 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 297 508  L 233 544  L 340 509 Z;M 241 483  L 289 489  L 348 565 Z;M 297 508  L 233 544  L 340 509 Z"></animate>
        </path>
        <path className="svgEl" id={173} d="M 340 509  L 307 709  L 294 558 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 340 509  L 307 709  L 294 558 Z;M 348 565  L 320 568  L 304 585 Z;M 340 509  L 307 709  L 294 558 Z"></animate>
        </path>
        <path className="svgEl" id={174} d="M 772 736  L 692 741  L 684 769 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 772 736  L 692 741  L 684 769 Z;M 759 699  L 671 619  L 654 780 Z;M 772 736  L 692 741  L 684 769 Z"></animate>
        </path>
        <path className="svgEl" id={175} d="M 757 725  L 860 710  L 694 664 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 757 725  L 860 710  L 694 664 Z;M 839 809  L 827 635  L 754 738 Z;M 757 725  L 860 710  L 694 664 Z"></animate>
        </path>
        <path className="svgEl" id={176} d="M 906 636  L 918 582  L 786 596 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 906 636  L 918 582  L 786 596 Z;M 758 681  L 853 603  L 750 489 Z;M 906 636  L 918 582  L 786 596 Z"></animate>
        </path>
        <path className="svgEl" id={177} d="M 624 817  L 772 736  L 684 769 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 624 817  L 772 736  L 684 769 Z;M 622 769  L 759 699  L 654 780 Z;M 624 817  L 772 736  L 684 769 Z"></animate>
        </path>
        <path className="svgEl" id={178} d="M 782 244  L 775 280  L 685 330 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 782 244  L 775 280  L 685 330 Z;M 729 228  L 760 201  L 676 345 Z;M 782 244  L 775 280  L 685 330 Z"></animate>
        </path>
        <path className="svgEl" id={179} d="M 701 235  L 717 85  L 672 248 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 701 235  L 717 85  L 672 248 Z;M 637 225  L 686 143  L 621 227 Z;M 701 235  L 717 85  L 672 248 Z"></animate>
        </path>
        <path className="svgEl" id={180} d="M 873 146  L 775 280  L 782 244 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 873 146  L 775 280  L 782 244 Z;M 766 244  L 760 201  L 729 228 Z;M 873 146  L 775 280  L 782 244 Z"></animate>
        </path>
        <path className="svgEl" id={181} d="M 799 353  L 826 311  L 872 263 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 799 353  L 826 311  L 872 263 Z;M 874 218  L 788 385  L 828 380 Z;M 799 353  L 826 311  L 872 263 Z"></animate>
        </path>
        <path className="svgEl" id={182} d="M 902 307  L 799 353  L 872 263 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 902 307  L 799 353  L 872 263 Z;M 888 386  L 874 218  L 828 380 Z;M 902 307  L 799 353  L 872 263 Z"></animate>
        </path>
        <path className="svgEl" id={183} d="M 927 629  L 918 582  L 906 636 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 927 629  L 918 582  L 906 636 Z;M 801 713  L 853 603  L 758 681 Z;M 927 629  L 918 582  L 906 636 Z"></animate>
        </path>
        <path className="svgEl" id={184} d="M 950 569  L 968 494  L 925 519 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 950 569  L 968 494  L 925 519 Z;M 914 582  L 898 432  L 819 495 Z;M 950 569  L 968 494  L 925 519 Z"></animate>
        </path>
        <path className="svgEl" id={185} d="M 789 147  L 717 85  L 701 235 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 789 147  L 717 85  L 701 235 Z;M 739 171  L 686 143  L 637 225 Z;M 789 147  L 717 85  L 701 235 Z"></animate>
        </path>
        <path className="svgEl" id={186} d="M 482 201  L 476 160  L 540 95 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 482 201  L 476 160  L 540 95 Z;M 579 167  L 596 278  L 555 200 Z;M 482 201  L 476 160  L 540 95 Z"></animate>
        </path>
        <path className="svgEl" id={187} d="M 482 201  L 519 88  L 476 160 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 482 201  L 519 88  L 476 160 Z;M 579 167  L 534 152  L 596 278 Z;M 482 201  L 519 88  L 476 160 Z"></animate>
        </path>
        <path className="svgEl" id={188} d="M 396 151  L 424 304  L 381 327 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 396 151  L 424 304  L 381 327 Z;M 390 304  L 380 184  L 389 294 Z;M 396 151  L 424 304  L 381 327 Z"></animate>
        </path>
        <path className="svgEl" id={189} d="M 574 179  L 482 201  L 540 95 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 574 179  L 482 201  L 540 95 Z;M 596 102  L 579 167  L 555 200 Z;M 574 179  L 482 201  L 540 95 Z"></animate>
        </path>
        <path className="svgEl" id={190} d="M 662 830  L 624 817  L 728 789 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 662 830  L 624 817  L 728 789 Z;M 680 888  L 622 769  L 724 661 Z;M 662 830  L 624 817  L 728 789 Z"></animate>
        </path>
        <path className="svgEl" id={191} d="M 662 830  L 728 789  L 664 811 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 662 830  L 728 789  L 664 811 Z;M 680 888  L 724 661  L 535 713 Z;M 662 830  L 728 789  L 664 811 Z"></animate>
        </path>
        <path className="svgEl" id={192} d="M 404 727  L 558 860  L 497 724 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 404 727  L 558 860  L 497 724 Z;M 417 720  L 426 824  L 423 716 Z;M 404 727  L 558 860  L 497 724 Z"></animate>
        </path>
        <path className="svgEl" id={193} d="M 613 776  L 662 830  L 664 811 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 613 776  L 662 830  L 664 811 Z;M 727 825  L 680 888  L 535 713 Z;M 613 776  L 662 830  L 664 811 Z"></animate>
        </path>
        <path className="svgEl" id={194} d="M 297 500  L 233 544  L 297 508 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 297 500  L 233 544  L 297 508 Z;M 182 402  L 289 489  L 241 483 Z;M 297 500  L 233 544  L 297 508 Z"></animate>
        </path>
        <path className="svgEl" id={195} d="M 248 718  L 324 636  L 294 558 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 248 718  L 324 636  L 294 558 Z;M 227 630  L 327 714  L 304 585 Z;M 248 718  L 324 636  L 294 558 Z"></animate>
        </path>
        <path className="svgEl" id={196} d="M 278 734  L 333 809  L 324 636 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 278 734  L 333 809  L 324 636 Z;M 328 671  L 356 735  L 327 714 Z;M 278 734  L 333 809  L 324 636 Z"></animate>
        </path>
        <path className="svgEl" id={197} d="M 404 727  L 375 872  L 558 860 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 404 727  L 375 872  L 558 860 Z;M 417 720  L 351 886  L 426 824 Z;M 404 727  L 375 872  L 558 860 Z"></animate>
        </path>
        <path className="svgEl" id={198} d="M 486 775  L 664 811  L 503 819 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 486 775  L 664 811  L 503 819 Z;M 565 798  L 535 713  L 547 737 Z;M 486 775  L 664 811  L 503 819 Z"></animate>
        </path>
        <path className="svgEl" id={199} d="M 183 686  L 248 718  L 294 558 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 183 686  L 248 718  L 294 558 Z;M 226 633  L 227 630  L 304 585 Z;M 183 686  L 248 718  L 294 558 Z"></animate>
        </path>
        <path className="svgEl" id={200} d="M 451 90  L 424 304  L 396 151 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 451 90  L 424 304  L 396 151 Z;M 442 185  L 380 184  L 390 304 Z;M 451 90  L 424 304  L 396 151 Z"></animate>
        </path>
        <path className="svgEl" id={201} d="M 233 544  L 291 592  L 340 509 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 233 544  L 291 592  L 340 509 Z;M 289 489  L 225 599  L 348 565 Z;M 233 544  L 291 592  L 340 509 Z"></animate>
        </path>
        <path className="svgEl" id={202} d="M 875 441  L 902 307  L 800 366 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 875 441  L 902 307  L 800 366 Z;M 1004 366  L 888 386  L 939 362 Z;M 875 441  L 902 307  L 800 366 Z"></animate>
        </path>
        <path className="svgEl" id={203} d="M 800 366  L 902 307  L 872 263 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 800 366  L 902 307  L 872 263 Z;M 939 362  L 888 386  L 828 380 Z;M 800 366  L 902 307  L 872 263 Z"></animate>
        </path>
        <path className="svgEl" id={204} d="M 799 353  L 873 146  L 782 244 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 799 353  L 873 146  L 782 244 Z;M 874 218  L 766 244  L 729 228 Z;M 799 353  L 873 146  L 782 244 Z"></animate>
        </path>
        <path className="svgEl" id={205} d="M 775 280  L 789 147  L 701 235 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 775 280  L 789 147  L 701 235 Z;M 760 201  L 739 171  L 637 225 Z;M 775 280  L 789 147  L 701 235 Z"></animate>
        </path>
        <path className="svgEl" id={206} d="M 717 85  L 574 179  L 540 95 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 717 85  L 574 179  L 540 95 Z;M 686 143  L 596 102  L 555 200 Z;M 717 85  L 574 179  L 540 95 Z"></animate>
        </path>
        <path className="svgEl" id={207} d="M 772 736  L 757 725  L 694 664 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 772 736  L 757 725  L 694 664 Z;M 759 699  L 839 809  L 754 738 Z;M 772 736  L 757 725  L 694 664 Z"></animate>
        </path>
        <path className="svgEl" id={208} d="M 860 710  L 927 629  L 906 636 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 860 710  L 927 629  L 906 636 Z;M 827 635  L 801 713  L 758 681 Z;M 860 710  L 927 629  L 906 636 Z"></animate>
        </path>
        <path className="svgEl" id={209} d="M 736 840  L 757 725  L 772 736 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 736 840  L 757 725  L 772 736 Z;M 723 766  L 839 809  L 759 699 Z;M 736 840  L 757 725  L 772 736 Z"></animate>
        </path>
        <path className="svgEl" id={210} d="M 216 420  L 292 330  L 253 252 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 216 420  L 292 330  L 253 252 Z;M 329 411  L 343 443  L 225 309 Z;M 216 420  L 292 330  L 253 252 Z"></animate>
        </path>
        <path className="svgEl" id={211} d="M 216 420  L 188 431  L 292 330 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 216 420  L 188 431  L 292 330 Z;M 329 411  L 271 470  L 343 443 Z;M 216 420  L 188 431  L 292 330 Z"></animate>
        </path>
        <path className="svgEl" id={212} d="M 297 500  L 146 478  L 233 544 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 297 500  L 146 478  L 233 544 Z;M 182 402  L 251 411  L 289 489 Z;M 297 500  L 146 478  L 233 544 Z"></animate>
        </path>
        <path className="svgEl" id={213} d="M 181 248  L 216 420  L 253 252 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 181 248  L 216 420  L 253 252 Z;M 258 327  L 329 411  L 225 309 Z;M 181 248  L 216 420  L 253 252 Z"></animate>
        </path>
        <path className="svgEl" id={214} d="M 330 252  L 253 201  L 340 318 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 330 252  L 253 201  L 340 318 Z;M 355 203  L 304 203  L 368 351 Z;M 330 252  L 253 201  L 340 318 Z"></animate>
        </path>
        <path className="svgEl" id={215} d="M 333 809  L 375 872  L 404 727 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 333 809  L 375 872  L 404 727 Z;M 356 735  L 351 886  L 417 720 Z;M 333 809  L 375 872  L 404 727 Z"></animate>
        </path>
        <path className="svgEl" id={216} d="M 160 689  L 307 709  L 291 592 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 160 689  L 307 709  L 291 592 Z;M 252 706  L 320 568  L 225 599 Z;M 160 689  L 307 709  L 291 592 Z"></animate>
        </path>
        <path className="svgEl" id={217} d="M 291 592  L 307 709  L 340 509 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 291 592  L 307 709  L 340 509 Z;M 225 599  L 320 568  L 348 565 Z;M 291 592  L 307 709  L 340 509 Z"></animate>
        </path>
        <path className="svgEl" id={218} d="M 248 718  L 278 734  L 324 636 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 248 718  L 278 734  L 324 636 Z;M 227 630  L 328 671  L 327 714 Z;M 248 718  L 278 734  L 324 636 Z"></animate>
        </path>
        <path className="svgEl" id={219} d="M 847 670  L 927 629  L 860 710 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 847 670  L 927 629  L 860 710 Z;M 928 726  L 801 713  L 827 635 Z;M 847 670  L 927 629  L 860 710 Z"></animate>
        </path>
        <path className="svgEl" id={220} d="M 950 569  L 925 519  L 795 548 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 950 569  L 925 519  L 795 548 Z;M 914 582  L 819 495  L 850 535 Z;M 950 569  L 925 519  L 795 548 Z"></animate>
        </path>
        <path className="svgEl" id={221} d="M 940 217  L 873 146  L 799 353 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 940 217  L 873 146  L 799 353 Z;M 806 248  L 766 244  L 874 218 Z;M 940 217  L 873 146  L 799 353 Z"></animate>
        </path>
        <path className="svgEl" id={222} d="M 775 280  L 760 181  L 789 147 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 775 280  L 760 181  L 789 147 Z;M 760 201  L 809 75  L 739 171 Z;M 775 280  L 760 181  L 789 147 Z"></animate>
        </path>
        <path className="svgEl" id={223} d="M 950 569  L 795 548  L 1001 561 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 950 569  L 795 548  L 1001 561 Z;M 914 582  L 850 535  L 863 591 Z;M 950 569  L 795 548  L 1001 561 Z"></animate>
        </path>
        <path className="svgEl" id={224} d="M 968 494  L 878 466  L 800 366 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 968 494  L 878 466  L 800 366 Z;M 898 432  L 884 533  L 939 362 Z;M 968 494  L 878 466  L 800 366 Z"></animate>
        </path>
        <path className="svgEl" id={225} d="M 338 122  L 330 252  L 424 304 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 338 122  L 330 252  L 424 304 Z;M 269 187  L 355 203  L 380 184 Z;M 338 122  L 330 252  L 424 304 Z"></animate>
        </path>
        <path className="svgEl" id={226} d="M 424 304  L 330 252  L 340 318 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 424 304  L 330 252  L 340 318 Z;M 380 184  L 355 203  L 368 351 Z;M 424 304  L 330 252  L 340 318 Z"></animate>
        </path>
        <path className="svgEl" id={227} d="M 253 201  L 181 248  L 253 252 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 253 201  L 181 248  L 253 252 Z;M 304 203  L 258 327  L 225 309 Z;M 253 201  L 181 248  L 253 252 Z"></animate>
        </path>
        <path className="svgEl" id={228} d="M 554 891  L 486 775  L 558 860 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 554 891  L 486 775  L 558 860 Z;M 474 892  L 565 798  L 426 824 Z;M 554 891  L 486 775  L 558 860 Z"></animate>
        </path>
        <path className="svgEl" id={229} d="M 558 860  L 486 775  L 503 819 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 558 860  L 486 775  L 503 819 Z;M 426 824  L 565 798  L 547 737 Z;M 558 860  L 486 775  L 503 819 Z"></animate>
        </path>
        <path className="svgEl" id={230} d="M 415 29  L 339 121  L 519 88 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 415 29  L 339 121  L 519 88 Z;M 461 100  L 490 153  L 534 152 Z;M 415 29  L 339 121  L 519 88 Z"></animate>
        </path>
        <path className="svgEl" id={231} d="M 519 88  L 339 121  L 396 151 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 519 88  L 339 121  L 396 151 Z;M 534 152  L 490 153  L 390 304 Z;M 519 88  L 339 121  L 396 151 Z"></animate>
        </path>
        <path className="svgEl" id={232} d="M 902 307  L 869 254  L 799 353 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 902 307  L 869 254  L 799 353 Z;M 888 386  L 922 206  L 874 218 Z;M 902 307  L 869 254  L 799 353 Z"></animate>
        </path>
        <path className="svgEl" id={233} d="M 964 361  L 869 254  L 902 307 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 964 361  L 869 254  L 902 307 Z;M 937 359  L 922 206  L 888 386 Z;M 964 361  L 869 254  L 902 307 Z"></animate>
        </path>
        <path className="svgEl" id={234} d="M 1001 561  L 795 548  L 868 581 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1001 561  L 795 548  L 868 581 Z;M 863 591  L 850 535  L 962 674 Z;M 1001 561  L 795 548  L 868 581 Z"></animate>
        </path>
        <path className="svgEl" id={235} d="M 339 121  L 451 90  L 396 151 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 339 121  L 451 90  L 396 151 Z;M 490 153  L 442 185  L 390 304 Z;M 339 121  L 451 90  L 396 151 Z"></animate>
        </path>
        <path className="svgEl" id={236} d="M 929 403  L 875 441  L 878 466 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 929 403  L 875 441  L 878 466 Z;M 917 495  L 1004 366  L 884 533 Z;M 929 403  L 875 441  L 878 466 Z"></animate>
        </path>
        <path className="svgEl" id={237} d="M 878 466  L 875 441  L 800 366 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 878 466  L 875 441  L 800 366 Z;M 884 533  L 1004 366  L 939 362 Z;M 878 466  L 875 441  L 800 366 Z"></animate>
        </path>
        <path className="svgEl" id={238} d="M 301 821  L 278 734  L 248 718 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 301 821  L 278 734  L 248 718 Z;M 252 749  L 328 671  L 227 630 Z;M 301 821  L 278 734  L 248 718 Z"></animate>
        </path>
        <path className="svgEl" id={239} d="M 333 809  L 341 741  L 375 872 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 333 809  L 341 741  L 375 872 Z;M 356 735  L 304 835  L 351 886 Z;M 333 809  L 341 741  L 375 872 Z"></animate>
        </path>
        <path className="svgEl" id={240} d="M 623 809  L 613 776  L 664 811 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 623 809  L 613 776  L 664 811 Z;M 673 780  L 727 825  L 535 713 Z;M 623 809  L 613 776  L 664 811 Z"></animate>
        </path>
        <path className="svgEl" id={241} d="M 662 830  L 656 910  L 624 817 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 662 830  L 656 910  L 624 817 Z;M 680 888  L 692 830  L 622 769 Z;M 662 830  L 656 910  L 624 817 Z"></animate>
        </path>
        <path className="svgEl" id={242} d="M 624 817  L 736 840  L 772 736 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 624 817  L 736 840  L 772 736 Z;M 622 769  L 723 766  L 759 699 Z;M 624 817  L 736 840  L 772 736 Z"></animate>
        </path>
        <path className="svgEl" id={243} d="M 873 146  L 760 181  L 775 280 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 873 146  L 760 181  L 775 280 Z;M 766 244  L 809 75  L 760 201 Z;M 873 146  L 760 181  L 775 280 Z"></animate>
        </path>
        <path className="svgEl" id={244} d="M 650 124  L 574 179  L 717 85 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 650 124  L 574 179  L 717 85 Z;M 681 132  L 596 102  L 686 143 Z;M 650 124  L 574 179  L 717 85 Z"></animate>
        </path>
        <path className="svgEl" id={245} d="M 650 124  L 717 85  L 695 49 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 650 124  L 717 85  L 695 49 Z;M 681 132  L 686 143  L 713 172 Z;M 650 124  L 717 85  L 695 49 Z"></animate>
        </path>
        <path className="svgEl" id={246} d="M 482 201  L 415 29  L 519 88 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 482 201  L 415 29  L 519 88 Z;M 579 167  L 461 100  L 534 152 Z;M 482 201  L 415 29  L 519 88 Z"></animate>
        </path>
        <path className="svgEl" id={247} d="M 291 200  L 181 248  L 253 201 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 291 200  L 181 248  L 253 201 Z;M 190 149  L 258 327  L 304 203 Z;M 291 200  L 181 248  L 253 201 Z"></animate>
        </path>
        <path className="svgEl" id={248} d="M 123 347  L 146 478  L 188 431 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 123 347  L 146 478  L 188 431 Z;M 219 340  L 251 411  L 271 470 Z;M 123 347  L 146 478  L 188 431 Z"></animate>
        </path>
        <path className="svgEl" id={249} d="M 868 581  L 795 548  L 918 582 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 868 581  L 795 548  L 918 582 Z;M 962 674  L 850 535  L 853 603 Z;M 868 581  L 795 548  L 918 582 Z"></animate>
        </path>
        <path className="svgEl" id={250} d="M 486 775  L 623 809  L 664 811 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 486 775  L 623 809  L 664 811 Z;M 565 798  L 673 780  L 535 713 Z;M 486 775  L 623 809  L 664 811 Z"></animate>
        </path>
        <path className="svgEl" id={251} d="M 278 734  L 341 741  L 333 809 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 278 734  L 341 741  L 333 809 Z;M 328 671  L 304 835  L 356 735 Z;M 278 734  L 341 741  L 333 809 Z"></animate>
        </path>
        <path className="svgEl" id={252} d="M 375 872  L 554 891  L 558 860 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 375 872  L 554 891  L 558 860 Z;M 351 886  L 474 892  L 426 824 Z;M 375 872  L 554 891  L 558 860 Z"></animate>
        </path>
        <path className="svgEl" id={253} d="M 656 910  L 736 840  L 624 817 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 656 910  L 736 840  L 624 817 Z;M 692 830  L 723 766  L 622 769 Z;M 656 910  L 736 840  L 624 817 Z"></animate>
        </path>
        <path className="svgEl" id={254} d="M 757 725  L 847 670  L 860 710 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 757 725  L 847 670  L 860 710 Z;M 839 809  L 928 726  L 827 635 Z;M 757 725  L 847 670  L 860 710 Z"></animate>
        </path> */}
        {/* <path className="svgEl" id={255} d="M 574 179  L 544 80  L 482 201 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 574 179  L 544 80  L 482 201 Z;M 596 102  L 507 55  L 579 167 Z;M 574 179  L 544 80  L 482 201 Z"></animate>
        </path>
        <path className="svgEl" id={256} d="M 159 757  L 183 686  L 307 709 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 159 757  L 183 686  L 307 709 Z;M 223 717  L 226 633  L 320 568 Z;M 159 757  L 183 686  L 307 709 Z"></animate>
        </path>
        <path className="svgEl" id={257} d="M 307 709  L 183 686  L 294 558 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 307 709  L 183 686  L 294 558 Z;M 320 568  L 226 633  L 304 585 Z;M 307 709  L 183 686  L 294 558 Z"></animate>
        </path>
        <path className="svgEl" id={258} d="M 278 734  L 370 846  L 341 741 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 278 734  L 370 846  L 341 741 Z;M 328 671  L 361 737  L 304 835 Z;M 278 734  L 370 846  L 341 741 Z"></animate>
        </path>
        <path className="svgEl" id={259} d="M 414 865  L 554 891  L 375 872 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 414 865  L 554 891  L 375 872 Z;M 377 782  L 474 892  L 351 886 Z;M 414 865  L 554 891  L 375 872 Z"></animate>
        </path>
        <path className="svgEl" id={260} d="M 486 775  L 576 855  L 623 809 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 486 775  L 576 855  L 623 809 Z;M 565 798  L 505 854  L 673 780 Z;M 486 775  L 576 855  L 623 809 Z"></animate>
        </path>
        <path className="svgEl" id={261} d="M 128 364  L 188 431  L 216 420 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 128 364  L 188 431  L 216 420 Z;M 214 318  L 271 470  L 329 411 Z;M 128 364  L 188 431  L 216 420 Z"></animate>
        </path>
        <path className="svgEl" id={262} d="M 188 431  L 146 478  L 297 500 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 188 431  L 146 478  L 297 500 Z;M 271 470  L 251 411  L 182 402 Z;M 188 431  L 146 478  L 297 500 Z"></animate>
        </path>
        <path className="svgEl" id={263} d="M 233 544  L 215 538  L 291 592 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 233 544  L 215 538  L 291 592 Z;M 289 489  L 113 546  L 225 599 Z;M 233 544  L 215 538  L 291 592 Z"></animate>
        </path>
        <path className="svgEl" id={264} d="M 989 697  L 868 581  L 927 629 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 989 697  L 868 581  L 927 629 Z;M 1011 756  L 962 674  L 801 713 Z;M 989 697  L 868 581  L 927 629 Z"></animate>
        </path>
        <path className="svgEl" id={265} d="M 927 629  L 868 581  L 918 582 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 927 629  L 868 581  L 918 582 Z;M 801 713  L 962 674  L 853 603 Z;M 927 629  L 868 581  L 918 582 Z"></animate>
        </path>
        <path className="svgEl" id={266} d="M 875 441  L 964 361  L 902 307 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 875 441  L 964 361  L 902 307 Z;M 1004 366  L 937 359  L 888 386 Z;M 875 441  L 964 361  L 902 307 Z"></animate>
        </path>
        <path className="svgEl" id={267} d="M 869 254  L 940 217  L 799 353 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 869 254  L 940 217  L 799 353 Z;M 922 206  L 806 248  L 874 218 Z;M 869 254  L 940 217  L 799 353 Z"></animate>
        </path>
        <path className="svgEl" id={268} d="M 695 49  L 717 85  L 789 147 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 695 49  L 717 85  L 789 147 Z;M 713 172  L 686 143  L 739 171 Z;M 695 49  L 717 85  L 789 147 Z"></animate>
        </path>
        <path className="svgEl" id={269} d="M 574 179  L 615 36  L 544 80 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 574 179  L 615 36  L 544 80 Z;M 596 102  L 458 -7  L 507 55 Z;M 574 179  L 615 36  L 544 80 Z"></animate>
        </path>
        <path className="svgEl" id={270} d="M 146 478  L 113 496  L 233 544 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 146 478  L 113 496  L 233 544 Z;M 251 411  L 107 525  L 289 489 Z;M 146 478  L 113 496  L 233 544 Z"></animate>
        </path>
        <path className="svgEl" id={271} d="M 544 80  L 415 29  L 482 201 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 544 80  L 415 29  L 482 201 Z;M 507 55  L 461 100  L 579 167 Z;M 544 80  L 415 29  L 482 201 Z"></animate>
        </path>
        <path className="svgEl" id={272} d="M 339 91  L 338 122  L 451 90 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 339 91  L 338 122  L 451 90 Z;M 341 171  L 269 187  L 442 185 Z;M 339 91  L 338 122  L 451 90 Z"></animate>
        </path>
        <path className="svgEl" id={273} d="M 615 36  L 415 29  L 544 80 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 615 36  L 415 29  L 544 80 Z;M 458 -7  L 461 100  L 507 55 Z;M 615 36  L 415 29  L 544 80 Z"></animate>
        </path>
        <path className="svgEl" id={274} d="M 760 181  L 695 49  L 789 147 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 760 181  L 695 49  L 789 147 Z;M 809 75  L 713 172  L 739 171 Z;M 760 181  L 695 49  L 789 147 Z"></animate>
        </path>
        <path className="svgEl" id={275} d="M 699 165  L 695 49  L 760 181 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 699 165  L 695 49  L 760 181 Z;M 812 87  L 713 172  L 809 75 Z;M 699 165  L 695 49  L 760 181 Z"></animate>
        </path>
        <path className="svgEl" id={276} d="M 113 496  L 215 538  L 233 544 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 113 496  L 215 538  L 233 544 Z;M 107 525  L 113 546  L 289 489 Z;M 113 496  L 215 538  L 233 544 Z"></animate>
        </path>
        <path className="svgEl" id={277} d="M 341 741  L 414 865  L 375 872 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 341 741  L 414 865  L 375 872 Z;M 304 835  L 377 782  L 351 886 Z;M 341 741  L 414 865  L 375 872 Z"></animate>
        </path>
        <path className="svgEl" id={278} d="M 594 988  L 656 910  L 613 776 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 594 988  L 656 910  L 613 776 Z;M 701 839  L 692 830  L 727 825 Z;M 594 988  L 656 910  L 613 776 Z"></animate>
        </path>
        <path className="svgEl" id={279} d="M 613 776  L 656 910  L 662 830 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 613 776  L 656 910  L 662 830 Z;M 727 825  L 692 830  L 680 888 Z;M 613 776  L 656 910  L 662 830 Z"></animate>
        </path>
        <path className="svgEl" id={280} d="M 908 853  L 757 725  L 736 840 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 908 853  L 757 725  L 736 840 Z;M 875 779  L 839 809  L 723 766 Z;M 908 853  L 757 725  L 736 840 Z"></animate>
        </path>
        <path className="svgEl" id={281} d="M 908 853  L 847 670  L 757 725 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 908 853  L 847 670  L 757 725 Z;M 875 779  L 928 726  L 839 809 Z;M 908 853  L 847 670  L 757 725 Z"></animate>
        </path>
        <path className="svgEl" id={282} d="M 181 248  L 128 364  L 216 420 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 181 248  L 128 364  L 216 420 Z;M 258 327  L 214 318  L 329 411 Z;M 181 248  L 128 364  L 216 420 Z"></animate>
        </path>
        <path className="svgEl" id={283} d="M 190 381  L 167 501  L 113 496 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 190 381  L 167 501  L 113 496 Z;M 123 445  L 210 565  L 107 525 Z;M 190 381  L 167 501  L 113 496 Z"></animate>
        </path>
        <path className="svgEl" id={284} d="M 974 230  L 940 217  L 869 254 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 974 230  L 940 217  L 869 254 Z;M 938 203  L 806 248  L 922 206 Z;M 974 230  L 940 217  L 869 254 Z"></animate>
        </path>
        <path className="svgEl" id={285} d="M 873 146  L 745 177  L 760 181 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 873 146  L 745 177  L 760 181 Z;M 766 244  L 850 185  L 809 75 Z;M 873 146  L 745 177  L 760 181 Z"></animate>
        </path>
        <path className="svgEl" id={286} d="M 961 170  L 745 177  L 873 146 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 961 170  L 745 177  L 873 146 Z;M 848 112  L 850 185  L 766 244 Z;M 961 170  L 745 177  L 873 146 Z"></animate>
        </path>
        <path className="svgEl" id={287} d="M 128 364  L 123 347  L 188 431 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 128 364  L 123 347  L 188 431 Z;M 214 318  L 219 340  L 271 470 Z;M 128 364  L 123 347  L 188 431 Z"></animate>
        </path>
        <path className="svgEl" id={288} d="M 113 496  L 167 501  L 215 538 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 113 496  L 167 501  L 215 538 Z;M 107 525  L 210 565  L 113 546 Z;M 113 496  L 167 501  L 215 538 Z"></animate>
        </path>
        <path className="svgEl" id={289} d="M 215 538  L 160 689  L 291 592 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 215 538  L 160 689  L 291 592 Z;M 113 546  L 252 706  L 225 599 Z;M 215 538  L 160 689  L 291 592 Z"></animate>
        </path>
        <path className="svgEl" id={290} d="M 451 90  L 338 122  L 424 304 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 451 90  L 338 122  L 424 304 Z;M 442 185  L 269 187  L 380 184 Z;M 451 90  L 338 122  L 424 304 Z"></animate>
        </path>
        <path className="svgEl" id={291} d="M 330 252  L 291 200  L 253 201 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 330 252  L 291 200  L 253 201 Z;M 355 203  L 190 149  L 304 203 Z;M 330 252  L 291 200  L 253 201 Z"></animate>
        </path>
        <path className="svgEl" id={292} d="M 181 248  L 189 295  L 128 364 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 181 248  L 189 295  L 128 364 Z;M 258 327  L 239 283  L 214 318 Z;M 181 248  L 189 295  L 128 364 Z"></animate>
        </path>
        <path className="svgEl" id={293} d="M 383 66  L 451 90  L 339 121 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 383 66  L 451 90  L 339 121 Z;M 422 128  L 442 185  L 490 153 Z;M 383 66  L 451 90  L 339 121 Z"></animate>
        </path>
        <path className="svgEl" id={294} d="M 692 914  L 908 853  L 736 840 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 692 914  L 908 853  L 736 840 Z;M 771 907  L 875 779  L 723 766 Z;M 692 914  L 908 853  L 736 840 Z"></animate>
        </path>
        <path className="svgEl" id={295} d="M 301 821  L 370 846  L 278 734 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 301 821  L 370 846  L 278 734 Z;M 252 749  L 361 737  L 328 671 Z;M 301 821  L 370 846  L 278 734 Z"></animate>
        </path>
        <path className="svgEl" id={296} d="M 341 741  L 424 864  L 414 865 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 341 741  L 424 864  L 414 865 Z;M 304 835  L 367 794  L 377 782 Z;M 341 741  L 424 864  L 414 865 Z"></animate>
        </path>
        <path className="svgEl" id={297} d="M 301 821  L 248 718  L 183 686 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 301 821  L 248 718  L 183 686 Z;M 252 749  L 227 630  L 226 633 Z;M 301 821  L 248 718  L 183 686 Z"></animate>
        </path>
        <path className="svgEl" id={298} d="M 203 714  L 301 821  L 183 686 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 203 714  L 301 821  L 183 686 Z;M 264 735  L 252 749  L 226 633 Z;M 203 714  L 301 821  L 183 686 Z"></animate>
        </path>
        <path className="svgEl" id={299} d="M 445 -7  L 420 71  L 415 29 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 445 -7  L 420 71  L 415 29 Z;M 497 94  L 466 31  L 461 100 Z;M 445 -7  L 420 71  L 415 29 Z"></animate>
        </path>
        <path className="svgEl" id={300} d="M 415 29  L 420 71  L 339 121 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 415 29  L 420 71  L 339 121 Z;M 461 100  L 466 31  L 490 153 Z;M 415 29  L 420 71  L 339 121 Z"></animate>
        </path>
        <path className="svgEl" id={301} d="M 1010 513  L 929 403  L 878 466 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1010 513  L 929 403  L 878 466 Z;M 1017 515  L 917 495  L 884 533 Z;M 1010 513  L 929 403  L 878 466 Z"></animate>
        </path>
        <path className="svgEl" id={302} d="M 875 441  L 1033 269  L 964 361 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 875 441  L 1033 269  L 964 361 Z;M 1004 366  L 938 401  L 937 359 Z;M 875 441  L 1033 269  L 964 361 Z"></animate>
        </path>
        <path className="svgEl" id={303} d="M 964 361  L 974 230  L 869 254 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 964 361  L 974 230  L 869 254 Z;M 937 359  L 938 203  L 922 206 Z;M 964 361  L 974 230  L 869 254 Z"></animate>
        </path>
        <path className="svgEl" id={304} d="M 1010 513  L 878 466  L 950 569 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1010 513  L 878 466  L 950 569 Z;M 1017 515  L 884 533  L 914 582 Z;M 1010 513  L 878 466  L 950 569 Z"></animate>
        </path>
        <path className="svgEl" id={305} d="M 1010 513  L 950 569  L 1001 561 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1010 513  L 950 569  L 1001 561 Z;M 1017 515  L 914 582  L 863 591 Z;M 1010 513  L 950 569  L 1001 561 Z"></animate>
        </path>
        <path className="svgEl" id={306} d="M 1016 204  L 974 230  L 964 361 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1016 204  L 974 230  L 964 361 Z;M 1067 357  L 938 203  L 937 359 Z;M 1016 204  L 974 230  L 964 361 Z"></animate>
        </path>
        <path className="svgEl" id={307} d="M 940 217  L 961 170  L 873 146 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 940 217  L 961 170  L 873 146 Z;M 806 248  L 848 112  L 766 244 Z;M 940 217  L 961 170  L 873 146 Z"></animate>
        </path>
        <path className="svgEl" id={308} d="M 927 588  L 1001 561  L 868 581 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 927 588  L 1001 561  L 868 581 Z;M 953 614  L 863 591  L 962 674 Z;M 927 588  L 1001 561  L 868 581 Z"></animate>
        </path>
        <path className="svgEl" id={309} d="M 1035 611  L 1010 513  L 1001 561 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1035 611  L 1010 513  L 1001 561 Z;M 962 500  L 1017 515  L 863 591 Z;M 1035 611  L 1010 513  L 1001 561 Z"></animate>
        </path>
        <path className="svgEl" id={310} d="M 926 696  L 927 629  L 847 670 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 926 696  L 927 629  L 847 670 Z;M 977 749  L 801 713  L 928 726 Z;M 926 696  L 927 629  L 847 670 Z"></animate>
        </path>
        <path className="svgEl" id={311} d="M 926 696  L 989 697  L 927 629 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 926 696  L 989 697  L 927 629 Z;M 977 749  L 1011 756  L 801 713 Z;M 926 696  L 989 697  L 927 629 Z"></animate>
        </path>
        <path className="svgEl" id={312} d="M 753 132  L 760 181  L 745 177 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 753 132  L 760 181  L 745 177 Z;M 831 35  L 809 75  L 850 185 Z;M 753 132  L 760 181  L 745 177 Z"></animate>
        </path>
        <path className="svgEl" id={313} d="M 753 132  L 699 165  L 760 181 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 753 132  L 699 165  L 760 181 Z;M 831 35  L 812 87  L 809 75 Z;M 753 132  L 699 165  L 760 181 Z"></animate>
        </path>
        <path className="svgEl" id={314} d="M 659 80  L 574 179  L 650 124 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 659 80  L 574 179  L 650 124 Z;M 719 107  L 596 102  L 681 132 Z;M 659 80  L 574 179  L 650 124 Z"></animate>
        </path>
        <path className="svgEl" id={316} d="M 656 910  L 692 914  L 736 840 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 656 910  L 692 914  L 736 840 Z;M 692 830  L 771 907  L 723 766 Z;M 656 910  L 692 914  L 736 840 Z"></animate>
        </path>
        <path className="svgEl" id={317} d="M 420 71  L 383 66  L 339 121 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 420 71  L 383 66  L 339 121 Z;M 466 31  L 422 128  L 490 153 Z;M 420 71  L 383 66  L 339 121 Z"></animate>
        </path>
        <path className="svgEl" id={318} d="M 322 927  L 424 864  L 341 741 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 322 927  L 424 864  L 341 741 Z;M 321 900  L 367 794  L 304 835 Z;M 322 927  L 424 864  L 341 741 Z"></animate>
        </path>
        <path className="svgEl" id={319} d="M 546 961  L 576 855  L 554 891 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 546 961  L 576 855  L 554 891 Z;M 418 844  L 505 854  L 474 892 Z;M 546 961  L 576 855  L 554 891 Z"></animate>
        </path>
        <path className="svgEl" id={320} d="M 554 891  L 576 855  L 486 775 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 554 891  L 576 855  L 486 775 Z;M 474 892  L 505 854  L 565 798 Z;M 554 891  L 576 855  L 486 775 Z"></animate>
        </path>
        <path className="svgEl" id={321} d="M 546 961  L 554 891  L 385 954 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 546 961  L 554 891  L 385 954 Z;M 418 844  L 474 892  L 467 980 Z;M 546 961  L 554 891  L 385 954 Z"></animate>
        </path>
        <path className="svgEl" id={322} d="M 623 809  L 594 988  L 613 776 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 623 809  L 594 988  L 613 776 Z;M 673 780  L 701 839  L 727 825 Z;M 623 809  L 594 988  L 613 776 Z"></animate>
        </path>
        <path className="svgEl" id={323} d="M 576 855  L 649 851  L 623 809 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 576 855  L 649 851  L 623 809 Z;M 505 854  L 548 939  L 673 780 Z;M 576 855  L 649 851  L 623 809 Z"></animate>
        </path>
        <path className="svgEl" id={324} d="M 239 185  L 291 200  L 338 122 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 239 185  L 291 200  L 338 122 Z;M 217 230  L 190 149  L 269 187 Z;M 239 185  L 291 200  L 338 122 Z"></animate>
        </path>
        <path className="svgEl" id={325} d="M 338 122  L 291 200  L 330 252 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 338 122  L 291 200  L 330 252 Z;M 269 187  L 190 149  L 355 203 Z;M 338 122  L 291 200  L 330 252 Z"></animate>
        </path>
        <path className="svgEl" id={326} d="M 163 368  L 190 381  L 123 347 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 163 368  L 190 381  L 123 347 Z;M 186 311  L 123 445  L 219 340 Z;M 163 368  L 190 381  L 123 347 Z"></animate>
        </path>
        <path className="svgEl" id={327} d="M 1124 457  L 924 362  L 929 403 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1124 457  L 924 362  L 929 403 Z;M 1118 447  L 964 381  L 917 495 Z;M 1124 457  L 924 362  L 929 403 Z"></animate>
        </path>
        <path className="svgEl" id={328} d="M 929 403  L 924 362  L 875 441 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 929 403  L 924 362  L 875 441 Z;M 917 495  L 964 381  L 1004 366 Z;M 929 403  L 924 362  L 875 441 Z"></animate>
        </path>
        <path className="svgEl" id={329} d="M 160 689  L 159 757  L 307 709 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 160 689  L 159 757  L 307 709 Z;M 252 706  L 223 717  L 320 568 Z;M 160 689  L 159 757  L 307 709 Z"></animate>
        </path>
        <path className="svgEl" id={331} d="M 87 551  L 160 689  L 215 538 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 87 551  L 160 689  L 215 538 Z;M 135 574  L 252 706  L 113 546 Z;M 87 551  L 160 689  L 215 538 Z"></animate>
        </path>
        <path className="svgEl" id={332} d="M 560 97  L 574 179  L 659 80 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 560 97  L 574 179  L 659 80 Z;M 541 41  L 596 102  L 719 107 Z;M 560 97  L 574 179  L 659 80 Z"></animate>
        </path>
        <path className="svgEl" id={333} d="M 560 97  L 615 36  L 574 179 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 560 97  L 615 36  L 574 179 Z;M 541 41  L 458 -7  L 596 102 Z;M 560 97  L 615 36  L 574 179 Z"></animate>
        </path>
        <path className="svgEl" id={334} d="M 341 116  L 339 91  L 383 66 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 341 116  L 339 91  L 383 66 Z;M 342 85  L 341 171  L 422 128 Z;M 341 116  L 339 91  L 383 66 Z"></animate>
        </path>
        <path className="svgEl" id={336} d="M 908 853  L 796 836  L 847 670 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 908 853  L 796 836  L 847 670 Z;M 875 779  L 798 859  L 928 726 Z;M 908 853  L 796 836  L 847 670 Z"></animate>
        </path>
        <path className="svgEl" id={337} d="M 1054 735  L 868 581  L 989 697 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1054 735  L 868 581  L 989 697 Z;M 1068 751  L 962 674  L 1011 756 Z;M 1054 735  L 868 581  L 989 697 Z"></animate>
        </path>
        <path className="svgEl" id={338} d="M 1054 735  L 927 588  L 868 581 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1054 735  L 927 588  L 868 581 Z;M 1068 751  L 953 614  L 962 674 Z;M 1054 735  L 927 588  L 868 581 Z"></animate>
        </path>
        <path className="svgEl" id={339} d="M 1010 513  L 1124 457  L 929 403 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1010 513  L 1124 457  L 929 403 Z;M 1017 515  L 1118 447  L 917 495 Z;M 1010 513  L 1124 457  L 929 403 Z"></animate>
        </path>
        <path className="svgEl" id={340} d="M 190 381  L 146 478  L 123 347 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 190 381  L 146 478  L 123 347 Z;M 123 445  L 251 411  L 219 340 Z;M 190 381  L 146 478  L 123 347 Z"></animate>
        </path>
        <path className="svgEl" id={341} d="M 190 381  L 113 496  L 146 478 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 190 381  L 113 496  L 146 478 Z;M 123 445  L 107 525  L 251 411 Z;M 190 381  L 113 496  L 146 478 Z"></animate>
        </path>
        <path className="svgEl" id={342} d="M 649 851  L 594 988  L 623 809 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 649 851  L 594 988  L 623 809 Z;M 548 939  L 701 839  L 673 780 Z;M 649 851  L 594 988  L 623 809 Z"></animate>
        </path>
        <path className="svgEl" id={343} d="M 796 836  L 926 696  L 847 670 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 796 836  L 926 696  L 847 670 Z;M 798 859  L 977 749  L 928 726 Z;M 796 836  L 926 696  L 847 670 Z"></animate>
        </path>
        <path className="svgEl" id={344} d="M 927 588  L 1035 611  L 1001 561 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 927 588  L 1035 611  L 1001 561 Z;M 953 614  L 962 500  L 863 591 Z;M 927 588  L 1035 611  L 1001 561 Z"></animate>
        </path>
        <path className="svgEl" id={345} d="M 946 181  L 940 217  L 974 230 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 946 181  L 940 217  L 974 230 Z;M 877 230  L 806 248  L 938 203 Z;M 946 181  L 940 217  L 974 230 Z"></animate>
        </path>
        <path className="svgEl" id={347} d="M 659 80  L 650 124  L 716 133 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 659 80  L 650 124  L 716 133 Z;M 719 107  L 681 132  L 718 140 Z;M 659 80  L 650 124  L 716 133 Z"></animate>
        </path>
        <path className="svgEl" id={348} d="M 163 368  L 123 347  L 129 311 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 163 368  L 123 347  L 129 311 Z;M 186 311  L 219 340  L 137 387 Z;M 163 368  L 123 347  L 129 311 Z"></animate>
        </path>
        <path className="svgEl" id={349} d="M 716 133  L 650 124  L 695 49 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 716 133  L 650 124  L 695 49 Z;M 718 140  L 681 132  L 713 172 Z;M 716 133  L 650 124  L 695 49 Z"></animate>
        </path>
        <path className="svgEl" id={351} d="M 699 165  L 716 133  L 695 49 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 699 165  L 716 133  L 695 49 Z;M 812 87  L 718 140  L 713 172 Z;M 699 165  L 716 133  L 695 49 Z"></animate>
        </path>
        <path className="svgEl" id={352} d="M 798 -22  L 716 133  L 699 165 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 798 -22  L 716 133  L 699 165 Z;M 696 29  L 718 140  L 812 87 Z;M 798 -22  L 716 133  L 699 165 Z"></animate>
        </path>
        <path className="svgEl" id={353} d="M 193 253  L 189 295  L 181 248 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 193 253  L 189 295  L 181 248 Z;M 259 242  L 239 283  L 258 327 Z;M 193 253  L 189 295  L 181 248 Z"></animate>
        </path>
        <path className="svgEl" id={354} d="M 1022 445  L 1033 269  L 924 362 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1022 445  L 1033 269  L 924 362 Z;M 1115 420  L 938 401  L 964 381 Z;M 1022 445  L 1033 269  L 924 362 Z"></animate>
        </path>
        <path className="svgEl" id={355} d="M 924 362  L 1033 269  L 875 441 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 924 362  L 1033 269  L 875 441 Z;M 964 381  L 938 401  L 1004 366 Z;M 924 362  L 1033 269  L 875 441 Z"></animate>
        </path>
        <path className="svgEl" id={356} d="M 385 954  L 554 891  L 414 865 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 385 954  L 554 891  L 414 865 Z;M 467 980  L 474 892  L 377 782 Z;M 385 954  L 554 891  L 414 865 Z"></animate>
        </path>
        <path className="svgEl" id={357} d="M 581 902  L 606 981  L 649 851 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 581 902  L 606 981  L 649 851 Z;M 602 979  L 715 1039  L 548 939 Z;M 581 902  L 606 981  L 649 851 Z"></animate>
        </path>
        <path className="svgEl" id={359} d="M 412 -22  L 383 66  L 420 71 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 412 -22  L 383 66  L 420 71 Z;M 339 -39  L 422 128  L 466 31 Z;M 412 -22  L 383 66  L 420 71 Z"></animate>
        </path>
        <path className="svgEl" id={360} d="M 383 66  L 339 91  L 451 90 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 383 66  L 339 91  L 451 90 Z;M 422 128  L 341 171  L 442 185 Z;M 383 66  L 339 91  L 451 90 Z"></animate>
        </path>
        <path className="svgEl" id={361} d="M 291 200  L 193 253  L 181 248 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 291 200  L 193 253  L 181 248 Z;M 190 149  L 259 242  L 258 327 Z;M 291 200  L 193 253  L 181 248 Z"></animate>
        </path>
        <path className="svgEl" id={362} d="M 876 179  L 753 132  L 745 177 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 876 179  L 753 132  L 745 177 Z;M 860 183  L 831 35  L 850 185 Z;M 876 179  L 753 132  L 745 177 Z"></animate>
        </path>
        <path className="svgEl" id={363} d="M 559 47  L 468 68  L 615 36 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 559 47  L 468 68  L 615 36 Z;M 525 49  L 404 -13  L 458 -7 Z;M 559 47  L 468 68  L 615 36 Z"></animate>
        </path>
        <path className="svgEl" id={364} d="M 615 36  L 468 68  L 415 29 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 615 36  L 468 68  L 415 29 Z;M 458 -7  L 404 -13  L 461 100 Z;M 615 36  L 468 68  L 415 29 Z"></animate>
        </path>
        <path className="svgEl" id={365} d="M 110 506  L 183 519  L 106 526 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 110 506  L 183 519  L 106 526 Z;M 97 614  L 93 522  L 6 519 Z;M 110 506  L 183 519  L 106 526 Z"></animate>
        </path>
        <path className="svgEl" id={366} d="M 167 501  L 183 519  L 215 538 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 167 501  L 183 519  L 215 538 Z;M 210 565  L 93 522  L 113 546 Z;M 167 501  L 183 519  L 215 538 Z"></animate>
        </path>
        <path className="svgEl" id={367} d="M 301 821  L 180 807  L 370 846 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 301 821  L 180 807  L 370 846 Z;M 252 749  L 166 817  L 361 737 Z;M 301 821  L 180 807  L 370 846 Z"></animate>
        </path>
        <path className="svgEl" id={368} d="M 370 846  L 322 927  L 341 741 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 370 846  L 322 927  L 341 741 Z;M 361 737  L 321 900  L 304 835 Z;M 370 846  L 322 927  L 341 741 Z"></animate>
        </path>
        <path className="svgEl" id={369} d="M 424 864  L 385 954  L 414 865 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 424 864  L 385 954  L 414 865 Z;M 367 794  L 467 980  L 377 782 Z;M 424 864  L 385 954  L 414 865 Z"></animate>
        </path>
        <path className="svgEl" id={370} d="M 203 714  L 180 807  L 301 821 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 203 714  L 180 807  L 301 821 Z;M 264 735  L 166 817  L 252 749 Z;M 203 714  L 180 807  L 301 821 Z"></animate>
        </path>
        <path className="svgEl" id={371} d="M 203 714  L 183 686  L 159 757 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 203 714  L 183 686  L 159 757 Z;M 264 735  L 226 633  L 223 717 Z;M 203 714  L 183 686  L 159 757 Z"></animate>
        </path>
        <path className="svgEl" id={374} d="M 194 138  L 193 253  L 291 200 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 194 138  L 193 253  L 291 200 Z;M 111 242  L 259 242  L 190 149 Z;M 194 138  L 193 253  L 291 200 Z"></animate>
        </path>
        <path className="svgEl" id={376} d="M 594 988  L 670 846  L 656 910 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 594 988  L 670 846  L 656 910 Z;M 701 839  L 678 886  L 692 830 Z;M 594 988  L 670 846  L 656 910 Z"></animate>
        </path>
        <path className="svgEl" id={379} d="M 985 741  L 912 678  L 926 696 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 985 741  L 912 678  L 926 696 Z;M 1011 839  L 993 802  L 977 749 Z;M 985 741  L 912 678  L 926 696 Z"></animate>
        </path>
        <path className="svgEl" id={380} d="M 926 696  L 912 678  L 989 697 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 926 696  L 912 678  L 989 697 Z;M 977 749  L 993 802  L 1011 756 Z;M 926 696  L 912 678  L 989 697 Z"></animate>
        </path>
        <path className="svgEl" id={381} d="M 328 825  L 322 927  L 370 846 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 328 825  L 322 927  L 370 846 Z;M 177 936  L 321 900  L 361 737 Z;M 328 825  L 322 927  L 370 846 Z"></animate>
        </path>
        <path className="svgEl" id={382} d="M 383 880  L 385 954  L 424 864 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 383 880  L 385 954  L 424 864 Z;M 313 958  L 467 980  L 367 794 Z;M 383 880  L 385 954  L 424 864 Z"></animate>
        </path>
        <path className="svgEl" id={383} d="M 129 311  L 128 364  L 189 295 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 129 311  L 128 364  L 189 295 Z;M 137 387  L 214 318  L 239 283 Z;M 129 311  L 128 364  L 189 295 Z"></animate>
        </path>
        <path className="svgEl" id={384} d="M 129 311  L 123 347  L 128 364 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 129 311  L 123 347  L 128 364 Z;M 137 387  L 219 340  L 214 318 Z;M 129 311  L 123 347  L 128 364 Z"></animate>
        </path>
        <path className="svgEl" id={385} d="M 106 526  L 183 519  L 167 501 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 106 526  L 183 519  L 167 501 Z;M 6 519  L 93 522  L 210 565 Z;M 106 526  L 183 519  L 167 501 Z"></animate>
        </path>
        <path className="svgEl" id={386} d="M 135 657  L 203 714  L 159 757 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 135 657  L 203 714  L 159 757 Z;M 60 710  L 264 735  L 223 717 Z;M 135 657  L 203 714  L 159 757 Z"></animate>
        </path>
        <path className="svgEl" id={387} d="M 670 846  L 794 931  L 656 910 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 670 846  L 794 931  L 656 910 Z;M 678 886  L 728 840  L 692 830 Z;M 670 846  L 794 931  L 656 910 Z"></animate>
        </path>
        <path className="svgEl" id={388} d="M 468 68  L 445 -7  L 415 29 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 468 68  L 445 -7  L 415 29 Z;M 404 -13  L 497 94  L 461 100 Z;M 468 68  L 445 -7  L 415 29 Z"></animate>
        </path>
        <path className="svgEl" id={391} d="M 183 519  L 87 551  L 215 538 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 183 519  L 87 551  L 215 538 Z;M 93 522  L 135 574  L 113 546 Z;M 183 519  L 87 551  L 215 538 Z"></animate>
        </path>
        <path className="svgEl" id={392} d="M 291 164  L 338 122  L 339 91 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 291 164  L 338 122  L 339 91 Z;M 207 30  L 269 187  L 341 171 Z;M 291 164  L 338 122  L 339 91 Z"></animate>
        </path>
        <path className="svgEl" id={393} d="M 291 164  L 239 185  L 338 122 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 291 164  L 239 185  L 338 122 Z;M 207 30  L 217 230  L 269 187 Z;M 291 164  L 239 185  L 338 122 Z"></animate>
        </path>
        <path className="svgEl" id={394} d="M 753 132  L 798 -22  L 699 165 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 753 132  L 798 -22  L 699 165 Z;M 831 35  L 696 29  L 812 87 Z;M 753 132  L 798 -22  L 699 165 Z"></animate>
        </path>
        <path className="svgEl" id={395} d="M 718 -28  L 559 -11  L 659 80 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 718 -28  L 559 -11  L 659 80 Z;M 597 -93  L 521 -44  L 719 107 Z;M 718 -28  L 559 -11  L 659 80 Z"></animate>
        </path>
        <path className="svgEl" id={396} d="M 322 927  L 383 880  L 424 864 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 322 927  L 383 880  L 424 864 Z;M 321 900  L 313 958  L 367 794 Z;M 322 927  L 383 880  L 424 864 Z"></animate>
        </path>
        <path className="svgEl" id={401} d="M 120 307  L 129 311  L 189 295 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 120 307  L 129 311  L 189 295 Z;M 64 350  L 137 387  L 239 283 Z;M 120 307  L 129 311  L 189 295 Z"></animate>
        </path>
        <path className="svgEl" id={402} d="M 120 307  L 189 295  L 152 196 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 120 307  L 189 295  L 152 196 Z;M 64 350  L 239 283  L 77 273 Z;M 120 307  L 189 295  L 152 196 Z"></animate>
        </path>
        <path className="svgEl" id={403} d="M 946 181  L 850 130  L 961 170 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 946 181  L 850 130  L 961 170 Z;M 877 230  L 925 103  L 848 112 Z;M 946 181  L 850 130  L 961 170 Z"></animate>
        </path>
        <path className="svgEl" id={404} d="M 961 170  L 876 179  L 745 177 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 961 170  L 876 179  L 745 177 Z;M 848 112  L 860 183  L 850 185 Z;M 961 170  L 876 179  L 745 177 Z"></animate>
        </path>
        <path className="svgEl" id={406} d="M 984 224  L 850 130  L 946 181 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 984 224  L 850 130  L 946 181 Z;M 1014 225  L 925 103  L 877 230 Z;M 984 224  L 850 130  L 946 181 Z"></animate>
        </path>
        <path className="svgEl" id={407} d="M 985 741  L 926 696  L 796 836 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 985 741  L 926 696  L 796 836 Z;M 1011 839  L 977 749  L 798 859 Z;M 985 741  L 926 696  L 796 836 Z"></animate>
        </path>
        <path className="svgEl" id={410} d="M 850 130  L 876 179  L 961 170 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 850 130  L 876 179  L 961 170 Z;M 925 103  L 860 183  L 848 112 Z;M 850 130  L 876 179  L 961 170 Z"></animate>
        </path>
        <path className="svgEl" id={411} d="M 579 1050  L 649 851  L 576 855 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 579 1050  L 649 851  L 576 855 Z;M 570 923  L 548 939  L 505 854 Z;M 579 1050  L 649 851  L 576 855 Z"></animate>
        </path>
        <path className="svgEl" id={414} d="M 659 80  L 559 -11  L 560 97 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 659 80  L 559 -11  L 560 97 Z;M 719 107  L 521 -44  L 541 41 Z;M 659 80  L 559 -11  L 560 97 Z"></animate>
        </path>
        <path className="svgEl" id={415} d="M 560 97  L 465 72  L 615 36 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 560 97  L 465 72  L 615 36 Z;M 541 41  L 501 -70  L 458 -7 Z;M 560 97  L 465 72  L 615 36 Z"></animate>
        </path>
        <path className="svgEl" id={416} d="M 468 68  L 361 30  L 445 -7 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 468 68  L 361 30  L 445 -7 Z;M 404 -13  L 346 22  L 497 94 Z;M 468 68  L 361 30  L 445 -7 Z"></animate>
        </path>
        <path className="svgEl" id={418} d="M 559 -11  L 465 72  L 560 97 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 559 -11  L 465 72  L 560 97 Z;M 521 -44  L 501 -70  L 541 41 Z;M 559 -11  L 465 72  L 560 97 Z"></animate>
        </path>
        <path className="svgEl" id={421} d="M 1124 457  L 1022 445  L 924 362 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 1124 457  L 1022 445  L 924 362 Z;M 1118 447  L 1115 420  L 964 381 Z;M 1124 457  L 1022 445  L 924 362 Z"></animate>
        </path>
        <path className="svgEl" id={4254} d="M 110 506  L 87 551  L 183 519 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 110 506  L 87 551  L 183 519 Z;M 97 614  L 135 574  L 93 522 Z;M 110 506  L 87 551  L 183 519 Z"></animate>
        </path>
        <path className="svgEl" id={426} d="M 87 551  L 109 752  L 160 689 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 87 551  L 109 752  L 160 689 Z;M 135 574  L 130 749  L 252 706 Z;M 87 551  L 109 752  L 160 689 Z"></animate>
        </path>
        <path className="svgEl" id={429} d="M 465 72  L 559 47  L 615 36 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 465 72  L 559 47  L 615 36 Z;M 501 -70  L 525 49  L 458 -7 Z;M 465 72  L 559 47  L 615 36 Z"></animate>
        </path>
        <path className="svgEl" id={430} d="M 445 -7  L 412 -22  L 420 71 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 445 -7  L 412 -22  L 420 71 Z;M 497 94  L 339 -39  L 466 31 Z;M 445 -7  L 412 -22  L 420 71 Z"></animate>
        </path>
        <path className="svgEl" id={433} d="M 341 116  L 291 164  L 339 91 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 341 116  L 291 164  L 339 91 Z;M 342 85  L 207 30  L 341 171 Z;M 341 116  L 291 164  L 339 91 Z"></animate>
        </path>
        <path className="svgEl" id={434} d="M 152 196  L 189 295  L 193 253 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 152 196  L 189 295  L 193 253 Z;M 77 273  L 239 283  L 259 242 Z;M 152 196  L 189 295  L 193 253 Z"></animate>
        </path>
        <path className="svgEl" id={436} d="M 194 138  L 291 200  L 239 185 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 194 138  L 291 200  L 239 185 Z;M 111 242  L 190 149  L 217 230 Z;M 194 138  L 291 200  L 239 185 Z"></animate>
        </path>
        <path className="svgEl" id={437} d="M 180 807  L 328 825  L 370 846 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 180 807  L 328 825  L 370 846 Z;M 166 817  L 177 936  L 361 737 Z;M 180 807  L 328 825  L 370 846 Z"></animate>
        </path>
        <path className="svgEl" id={438} d="M 322 927  L 366 833  L 383 880 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 322 927  L 366 833  L 383 880 Z;M 321 900  L 335 826  L 313 958 Z;M 322 927  L 366 833  L 383 880 Z"></animate>
        </path>
        <path className="svgEl" id={440} d="M 224 813  L 180 807  L 203 714 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 224 813  L 180 807  L 203 714 Z;M 163 807  L 166 817  L 264 735 Z;M 224 813  L 180 807  L 203 714 Z"></animate>
        </path>
        <path className="svgEl" id={441} d="M 709 -98  L 659 80  L 716 133 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 709 -98  L 659 80  L 716 133 Z;M 692 56  L 719 107  L 718 140 Z;M 709 -98  L 659 80  L 716 133 Z"></animate>
        </path>
        <path className="svgEl" id={443} d="M 406 3  L 361 30  L 470 -20 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 406 3  L 361 30  L 470 -20 Z;M 406 -41  L 346 22  L 441 -11 Z;M 406 3  L 361 30  L 470 -20 Z"></animate>
        </path>
        <path className="svgEl" id={444} d="M 579 1050  L 581 902  L 649 851 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 579 1050  L 581 902  L 649 851 Z;M 570 923  L 602 979  L 548 939 Z;M 579 1050  L 581 902  L 649 851 Z"></animate>
        </path>
        <path className="svgEl" id={445} d="M 135 657  L 224 813  L 203 714 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 135 657  L 224 813  L 203 714 Z;M 60 710  L 163 807  L 264 735 Z;M 135 657  L 224 813  L 203 714 Z"></animate>
        </path>
        <path className="svgEl" id={450} d="M 855 38  L 753 132  L 876 179 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 855 38  L 753 132  L 876 179 Z;M 847 -22  L 831 35  L 860 183 Z;M 855 38  L 753 132  L 876 179 Z"></animate>
        </path>
        <path className="svgEl" id={451} d="M 143 173  L 194 138  L 239 185 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 143 173  L 194 138  L 239 185 Z;M 179 118  L 111 242  L 217 230 Z;M 143 173  L 194 138  L 239 185 Z"></animate>
        </path>
        <path className="svgEl" id={452} d="M 190 381  L 163 368  L 124 461 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 190 381  L 163 368  L 124 461 Z;M 123 445  L 186 311  L 68 411 Z;M 190 381  L 163 368  L 124 461 Z"></animate>
        </path>
        <path className="svgEl" id={453} d="M 106 526  L 190 381  L 124 461 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 106 526  L 190 381  L 124 461 Z;M 6 519  L 123 445  L 68 411 Z;M 106 526  L 190 381  L 124 461 Z"></animate>
        </path>
        <path className="svgEl" id={454} d="M 106 526  L 167 501  L 190 381 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 106 526  L 167 501  L 190 381 Z;M 6 519  L 210 565  L 123 445 Z;M 106 526  L 167 501  L 190 381 Z"></animate>
        </path>
        <path className="svgEl" id={456} d="M 412 -22  L 341 116  L 383 66 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 412 -22  L 341 116  L 383 66 Z;M 339 -39  L 342 85  L 422 128 Z;M 412 -22  L 341 116  L 383 66 Z"></animate>
        </path>
        <path className="svgEl" id={464} d="M 124 461  L 163 368  L 98 427 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 124 461  L 163 368  L 98 427 Z;M 68 411  L 186 311  L 144 384 Z;M 124 461  L 163 368  L 98 427 Z"></animate>
        </path>
        <path className="svgEl" id={468} d="M 559 47  L 361 30  L 468 68 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 559 47  L 361 30  L 468 68 Z;M 525 49  L 346 22  L 404 -13 Z;M 559 47  L 361 30  L 468 68 Z"></animate>
        </path>
        <path className="svgEl" id={469} d="M 328 825  L 366 833  L 322 927 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 328 825  L 366 833  L 322 927 Z;M 177 936  L 335 826  L 321 900 Z;M 328 825  L 366 833  L 322 927 Z"></animate>
        </path>
        <path className="svgEl" id={470} d="M 98 427  L 163 368  L -8 338 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 98 427  L 163 368  L -8 338 Z;M 144 384  L 186 311  L 33 328 Z;M 98 427  L 163 368  L -8 338 Z"></animate>
        </path>
        <path className="svgEl" id={474} d="M -8 338  L 163 368  L 129 311 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M -8 338  L 163 368  L 129 311 Z;M 33 328  L 186 311  L 137 387 Z;M -8 338  L 163 368  L 129 311 Z"></animate>
        </path>
        <path className="svgEl" id={480} d="M 456 -143  L 559 47  L 465 72 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 456 -143  L 559 47  L 465 72 Z;M 514 22  L 525 49  L 501 -70 Z;M 456 -143  L 559 47  L 465 72 Z"></animate>
        </path>
        <path className="svgEl" id={482} d="M 985 741  L 969 738  L 912 678 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 985 741  L 969 738  L 912 678 Z;M 1011 839  L 1030 817  L 993 802 Z;M 985 741  L 969 738  L 912 678 Z"></animate>
        </path>
        <path className="svgEl" id={485} d="M 328 825  L 274 965  L 366 833 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 328 825  L 274 965  L 366 833 Z;M 177 936  L 266 986  L 335 826 Z;M 328 825  L 274 965  L 366 833 Z"></animate>
        </path>
        <path className="svgEl" id={498} d="M 128 262  L 129 311  L 120 307 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 128 262  L 129 311  L 120 307 Z;M 0 203  L 137 387  L 64 350 Z;M 128 262  L 129 311  L 120 307 Z"></animate>
        </path>
        <path className="svgEl" id={512} d="M 143 173  L 239 185  L 291 164 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 143 173  L 239 185  L 291 164 Z;M 179 118  L 217 230  L 207 30 Z;M 143 173  L 239 185  L 291 164 Z"></animate>
        </path>
        <path className="svgEl" id={516} d="M 559 -11  L 718 -28  L 539 4 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 559 -11  L 718 -28  L 539 4 Z;M 521 -44  L 597 -93  L 607 -13 Z;M 559 -11  L 718 -28  L 539 4 Z"></animate>
        </path>
        <path className="svgEl" id={517} d="M 361 30  L 406 3  L 445 -7 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 361 30  L 406 3  L 445 -7 Z;M 346 22  L 406 -41  L 497 94 Z;M 361 30  L 406 3  L 445 -7 Z"></animate>
        </path>
        <path className="svgEl" id={518} d="M 265 5  L 143 173  L 291 164 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 265 5  L 143 173  L 291 164 Z;M 263 110  L 179 118  L 207 30 Z;M 265 5  L 143 173  L 291 164 Z"></animate>
        </path>
        <path className="svgEl" id={521} d="M 265 5  L 291 164  L 341 116 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 265 5  L 291 164  L 341 116 Z;M 263 110  L 207 30  L 342 85 Z;M 265 5  L 291 164  L 341 116 Z"></animate>
        </path>
        <path className="svgEl" id={525} d="M 969 738  L 990 707  L 912 678 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 969 738  L 990 707  L 912 678 Z;M 1030 817  L 993 700  L 993 802 Z;M 969 738  L 990 707  L 912 678 Z"></animate>
        </path>
        <path className="svgEl" id={530} d="M 135 657  L 154 759  L 224 813 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 135 657  L 154 759  L 224 813 Z;M 60 710  L 135 774  L 163 807 Z;M 135 657  L 154 759  L 224 813 Z"></animate>
        </path>
        <path className="svgEl" id={534} d="M 539 4  L 718 -28  L 656 7 Z" stroke="#000000" fill="transparent">
        <animate attributeName="d" repeatDur="indefinite" dur="120s" keyTimes="0;0.5;1" values="M 539 4  L 718 -28  L 656 7 Z;M 607 -13  L 597 -93  L 634 -106 Z;M 539 4  L 718 -28  L 656 7 Z"></animate>
        </path> */}
        </g>
        </g>
        </svg>
        </div>
    )
};

export default LandingPageBg;

