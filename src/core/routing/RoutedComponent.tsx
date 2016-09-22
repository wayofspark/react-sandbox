
import * as React from "react";
import Location = HistoryModule.Location;
import PlainRoute = ReactRouter.PlainRoute;
import History = HistoryModule.History;


/**
 * Interface for props injected by react-router to it's route components.
 */
export interface RoutedComponentProps {
    
    history  : History
    location : Location
    route    : PlainRoute

}

/**
 * Base class for components used as route components from the router.
 */
export class RoutedComponent<P extends RoutedComponentProps, T> extends React.Component<P, T> {

    
}