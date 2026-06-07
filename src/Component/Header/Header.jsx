import "./Header.css";
import BranchSelector from "../BranchSelector/BranchSelector";
import ViewSwitcher from "../ViewSwitcher/ViewSwitcher";

export default function Header({ branch, setBranch, view, setView, selectedNotes }) {

    return (
        <header className="app-header">
            <div className="header-content">

                {/* LEFT — TITLE */}
                <div className="header-left">
                    <h1 className="header-title">ParfumAe Insight</h1>
                </div>

                {/* CENTER — VIEW SWITCHER */}
                <div className="header-center">
                    <ViewSwitcher
                        view={view}
                        setView={setView}
                        disabled={selectedNotes.length > 0}
                    />
                </div>

                {/* RIGHT — BRANCH SELECTOR */}
                <div className="header-right">
                    <BranchSelector branch={branch} setBranch={setBranch} />
                </div>

            </div>
        </header>
    );
}
