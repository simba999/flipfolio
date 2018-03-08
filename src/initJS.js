/* eslint-disable */
import $ from "jquery";
import Hammer from "hammerjs";
import ons from "onsenui";

function initJS() {
  $(document).ready(function() {
    // Cards
    try {
      let tabbar = document.getElementById("tabbar");
      let divGD = ons.GestureDetector(
        document.querySelector(".ons-tabbar__footer")
      );
      divGD.on("swipeleft", function(event) {
        let activeTab = tabbar.getActiveTabIndex();
        if (activeTab < 2) {
          tabbar.setActiveTab(activeTab + 1);
        }
      });
      divGD.on("swiperight", function(event) {
        let activeTab = tabbar.getActiveTabIndex();
        if (activeTab > 0) {
          tabbar.setActiveTab(activeTab - 1);
        }
      });

      // Cards

      let card = document.getElementById("card");

      // Card Swipe

      let swipeCards = function() {
        let numCards = $(".card").length;
        for (let i = numCards; i > 0; i--) {
          let element = document.getElementsByClassName("card");
          let num = numCards - 1;
          console.log(num);
          element = element[num];
          let attrs = i;

          let textYes = element.querySelector(".card-image-yes");
          let textNo = element.querySelector(".card-image-no");

          // set the stack order and the cascade effect
          element.style.zIndex = 99 - attrs.index;
          let offsetTop = Math.min(Math.max(attrs.index * 5, 0), 15);

          // the active variable is used to render each frame of the animation
          let active = false;
          let transform;

          let reqAnimationFrame = (function() {
            return (
              window[Hammer.prefixed(window, "requestAnimationFrame")] ||
              function(callback) {
                window.setTimeout(callback, 1000 / 60);
              }
            );
          })();

          let mc = new Hammer.Manager(element);
          mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

          // all animation takes place between when active changes state from true
          // in requestElementUpdate to false in updateElementTransform
          function requestElementUpdate() {
            if (!active) {
              reqAnimationFrame(updateElementTransform);
              active = true;
            }
          }

          function resetElement() {
            element.className = "card animate";
            textYes.style.opacity = 0;
            textNo.style.opacity = 0;
            transform = {
              translate: {
                x: 0,
                y: 0
              },
              angle: 0
            };
            requestElementUpdate();
          }
          resetElement();

          function updateElementTransform() {
            let value = [
              "translate3d(" +
                transform.translate.x +
                "px, " +
                transform.translate.y +
                "px, 0)",
              "rotate(" + transform.angle + "deg)"
            ].join(" ");

            element.style.webkitTransform = value;
            element.style.mozTransform = value;
            element.style.transform = value;
            active = false;
          }
          mc.on("hammer.input", function(ev) {
            if (ev.isFinal) {
              if (textYes.style.opacity == 1) {
                //offscreen
                element.className = "card tinder-card animate";
                transform.translate = {
                  x: ev.deltaX * 3,
                  y: ev.deltaY * 3
                };
                requestElementUpdate();
                window.setTimeout(function() {
                  //element.parentNode.removeChild(element);
                  // destroyCard(true);
                }, 500);
              } else if (textNo.style.opacity == 1) {
                //offscreen
                element.className = "card tinder-card animate";
                transform.translate = {
                  x: ev.deltaX * 3,
                  y: ev.deltaY * 3
                };
                requestElementUpdate();
                window.setTimeout(function() {
                  //element.parentNode.removeChild(element);
                  // destroyCard(false);
                }, 500);
              } else {
                resetElement();
              }
            }
          });

          mc.on("panstart panmove", function(ev) {
            let MAX_ANGLE = 25;

            element.className = "card tinder-card";
            transform.translate = {
              x: ev.deltaX,
              y: ev.deltaY
            };

            // change opacity of the LIKE / NOPE text and angle of card
            let multiplier = Math.min(
              Math.max(Math.abs(ev.deltaX) / (element.offsetWidth / 1.5), 0),
              1
            );
            if (ev.deltaX > 0) {
              transform.angle = MAX_ANGLE * multiplier;
              textYes.style.opacity = multiplier;
              textNo.style.opacity = 0;
            } else if (ev.deltaX <= 0) {
              transform.angle = -MAX_ANGLE * multiplier;
              textYes.style.opacity = 0;
              textNo.style.opacity = multiplier;
            }

            requestElementUpdate();
          });
        }
      };
      swipeCards();
    } catch (error) {}
  });
}

export default initJS;
