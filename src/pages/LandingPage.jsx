import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    //navigate to home page
    navigate("/home");
  };

  return (
    <>
      <div className="container">
        <div className="header row align-items-center m-5">
        <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Landing Image" style={{width:'100%', height:'700px'}}
            />
          </div>
          <div className="col"></div>
          <div className="col-lg-5">
            <h3>
              Welcome to <span className="text-info">Recipe Book</span>
            </h3>
            <p>
              RecipeBook is the place for best recipes that can be made with
              ingredients you have in hand!
            </p>
            <button onClick={handleNavigate} className="btn btn-info mt-3">
              Let's Check
            </button>
          </div>
         
          
        </div>
        <div className="features mt-5">
          <h3 className="text-center mb-5">What to cook today...</h3>
          <div className="container ">
            <img
              src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              style={{ width: "100%" }}
            />
            <p className="mt-5">
              A  recipe book can offer several benefits: <br />
              <span className="fst-italic fw-bold">
                Preserving Family Traditions
              </span>{" "}
              : A recipe book allows you to document and preserve cherished
              family recipes that have been passed down through generations. It
              helps maintain a connection to your cultural heritage and ensures
              that these recipes are not lost over time. <br />
              <span className="fst-italic fw-bold">
                Creating a Sense of Identity
              </span>{" "}
              : Family recipes often carry stories and memories associated with
              them. Having a recipe book allows you to share these stories with
              future generations, creating a sense of identity and belonging
              within the family. <br />
              <span className="fst-italic fw-bold">
                Passing Down Culinary Skills
              </span>{" "}
              : A recipe book serves as a valuable tool for teaching cooking
              skills to younger family members. It provides a reference for
              traditional cooking techniques, ingredient combinations, and
              family secrets, allowing the knowledge to be passed on and
              preserved. <br />
              <span className="fst-italic fw-bold">
                Encouraging Family Bonding
              </span>{" "}
              : Cooking and sharing meals together can strengthen family bonds.
              A recipe book can inspire family members to come together in the
              kitchen, collaborate on preparing meals, and create lasting
              memories. <br />
              <span className="fst-italic fw-bold">
                Customization and Adaptation
              </span>{" "}
              : A family recipe book can be personalized with notes,
              modifications, and variations to suit individual tastes and
              dietary preferences. It allows each family member to add their own
              touch to the recipes, making them truly unique and reflective of
              the family's evolving culinary preferences. <br />
              <span className="fst-italic fw-bold">Health and Nutrition</span> :
              A recipe book can include a variety of nutritious and balanced
              meals, promoting healthier eating habits within the family. It can
              also serve as a reference for dietary restrictions or special
              dietary needs, ensuring that everyone's preferences and
              requirements are accommodated.
            </p>
          </div>
        </div>
        
      </div>
      <hr className="mt-5" />
    </>
  );
}

export default LandingPage;
