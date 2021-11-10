import React, { useState, Suspense, lazy, useContext } from "react";
import image from "../../assets/image/logo.png";
import UserContext from "../context/UserContext";
import { DeleteSaleItemContextProvider } from "../context/deleteSaleContext";
const ClientRoutes = lazy(() => import("./client.routes"));
const DependentRoutes = lazy(() => import("./dependent.routes"));
const AdminRoutes = lazy(() => import("./administrador.routes"));
const RootRoutes = lazy(() => import("./root.routes"));
const InvitadoRoutes = lazy(() => import("./invitado.routes"));
function IndexRoutes() {
  const { Current, SetCurrent } = useContext(UserContext);
  console.log(Current, SetCurrent);

  const [Details, SetDetails] = useState("ClientRoutes");

  const HandleCurrent = () => {
    switch (Current) {
      case 0:
        SetCurrent(1);
        SetDetails("ClientRoutes");
        break;
      case 1:
        SetCurrent(2);
        SetDetails("DependentRoutes");
        break;
      case 2:
        SetCurrent(3);
        SetDetails("AdminRoutes");
        break;
      case 3:
        SetCurrent(4);
        SetDetails("RootRoutes");
        break;
      case 4:
        SetCurrent(0);
        SetDetails("InvitadosRoutes");
        break;
      default:
        break;
    }
  };
  const divStyle = {
    height: "100vh",
    width: "100vw",
  };
  return (
    <Suspense
      fallback={
        <div className="logo">
          <img style={divStyle} alt="" src={image} />
        </div>
      }
    >
      <button onClick={HandleCurrent}>{Details}</button>
      {Current === 1 ? (
        <DeleteSaleItemContextProvider>
          <ClientRoutes />
        </DeleteSaleItemContextProvider>
      ) : Current === 2 ? (
        <DependentRoutes />
      ) : Current === 3 ? (
        <AdminRoutes />
      ) : Current === 4 ? (
        <RootRoutes />
      ) : Current === 0 ? (
        <DeleteSaleItemContextProvider>
          <InvitadoRoutes />
        </DeleteSaleItemContextProvider>
      ) : null}
    </Suspense>
  );
}

export default IndexRoutes;

/*import React from "react";
import PatientsRoutes from "./patients.routes";
import DoctorsRoutes from "./doctors.routes";
import VisitanteRoutes from "./visitante.routes";
import Load from "../pages/shared/load/load.view";
import { connect } from "react-redux";
import { setCurrentUser } from "../../redux-store/actions/auth-actions";
import { onAuthChanged, selectUser } from "../../lib/data/user.data";

class AppRoutes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  async handleUserDetail(user) {
    const { setCurrentUser } = this.props;
    try {
      const userDetail = await selectUser(user.uid);
      setCurrentUser(userDetail);
    } catch (error) {
      console.error(error);
    }
    this.setState({ loading: false });
  }

  listenAuthentication = () => {
    const { setCurrentUser } = this.props;
    onAuthChanged((user) => {
      if (user) {
        this.handleUserDetail(user);
      } else {
        setCurrentUser(undefined);
        this.setState({ loading: false });
      }
    });
  };

  render() {
    const { loading } = this.state;
    const { currentUser } = this.props;

    if (loading) return <Load />;
    else {
    
    }
  }
  async componentDidMount() {
    this.listenAuthentication();
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);*/
