## Component-based software engineering

Component-based software engineering, aslo called as component-based development (CBD), is a branch of software engineering that emphasiszes the separation of concerns with respect to the wide-ranging functionaility available throughout a given software system. It is a reuse-based approach to defining, implementing and composing loosely coupled independent components into systesm. This practice aims to bring about an equally wide-ranging degree of benefits in both the short-term and the long-term for the software itself and for organizations that sponsor such software.

Software engineering practitioners regard compnents as part of the starting platform for service-orientation. Components play this role, for example, in web services, and more recently, in service-oriented architectures(SOA), whereby a component is converted by the web service into a service and subsequently inherits further characteristics beyond that of an ordinary component.

Components can produce or consume events and can be used for event-driven architectures(EDA).

## Definition and characteritsitcs of comopnents
An individual software component is a software package, a web service, a web resource, or a module that encapsulates a set of related funcitons.

All system processes are placed into separate components so that all of the data and functions inside each component are semantically related (just as with the contents of classes). Because of this principle, it is often said that components are modular and cohesive.

With regard to system=wide co-ordination, components communicate with each other via interfaces. When a component offers services to the rest of the system, it adopts a provided interface that specifies the services that other components can utilize, and how they can do so. This interface can be seeen as a signature of the component - the client does not need to know about hte inner workings of the component (implementation) in order to make use of it. The principle result in components referred to as encapsulated. The UML illustrations within this article represnt provided interfaces by a lollipop-symbol attached to the outer edge of the component.

When a componnet needs to use another component in order to funciton, it adopts a used interface that specifies the servics that it needs. In the UML illustrations in this article, used interfaces are representetd by an open socket symbol attached to the outer edge of the component.

Another important attribute of components is that they are substitutable, so that a component can repalce another (at design time or run-time), if the successor component meets the requirements of the initial component (expressed via the interfaces). Consequently, components can be replaced with either an updated version or an alternative without breaking the sytem in which the component operates.

As a rule of thumb for engineers substituting components, component B can immdediately repalce compnent A.

Software componets often take the form of objects or collections of bojects, in some binary or textual form, adhering to some interface description language so that the component may eist autonomously from other components in a computer. In other words, a component acts without changing its source code. Although, the behavior of hte componnts' source code may change based on the applicaiton's extensibility, proivded by its writer.


## Differences from object-oriented programming
Proponents of object-oriented programming (OOP) maintain that software should be written according to a mental model of the actual or imagined objects it represents. OOP and the related disciplines of object-oriented analysis and object-oriented design focus on modeling real-world interactions and atempting to create nouns and verbs that can be used in more humnaredable ways.     
