import React, { useState } from "react";
// import PropTypes from 'prop-types'
import AddClassButton from "../classes/add_class_button";
import ClassFormContainer from "../classes/form/class_form_container";
import ClassIndexContainer from "../classes/index/class_index_container";

const ClassPage = (props) => {
  const [isCreatingClass, setIsCreatingClass] = useState(false);

  const openClassCreator = () => setIsCreatingClass(true);
  const closeClassCreator = () => setIsCreatingClass(false);

  return (
    <main className="class-page">
      <AddClassButton open={openClassCreator} />
      <ClassIndexContainer />
      {isCreatingClass ? (
        <ClassFormContainer close={closeClassCreator} />
      ) : null}
    </main>
  );
};

// ClassPage.propTypes = {

// }

export default ClassPage;
