
import { contactPeople, contactUs } from "../constants"
import "~/index.css";



export const ContactSection = () => {
  return (
    <div className="container mx-auto space-y-8 max-w-3xl">
      <div className="border-t border-b border-gray-300 py-4 text-center">
        {contactPeople
          .filter((person) => person.type === "board")
          .map((person) => (
            <div key={person.id}>
              <h2 className="font-bold text-lg">{person.name}</h2>
              <p className="text-sm text-gray-600">{person.email}</p>
            </div>
          ))}
      </div>

      <div>
        <h2 className="font-bold text-lg text-center mb-4">Position 2:</h2>
        <ul className="space-y-2">
          {contactPeople
            .filter((person) => person.type === "director")
            .map((person) => (
              <li key={person.id} className="text-center">
                <p className="font-bold">{person.name}</p>
                <p className="italic">{person.title}</p>
                <p className="text-gray-600">{person.email}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Committees */}
      <div className="border-t border-b border-gray-300 py-4">
        <h2 className="font-bold text-lg text-center mb-4">Position 3:</h2>
        <ul className="space-y-4">
          {contactPeople
            .filter((person) => person.type === "committee")
            .map((person) => (
              <li key={person.id} className="text-center">
                <p>{person.title}</p>
                <p className="text-gray-600 font-bold">{person.email}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Current Committee Members */}
      <div>
        <h2 className="font-bold text-lg text-center mb-4">
          Position 4
        </h2>
        <ul className="space-y-4">
          {contactPeople
            .filter((person) => person.type === "currentMember")
            .map((person) => (
              <li key={person.id} className="text-center">
                <p className="font-bold">{person.title}</p>
                <p className="text-gray-600">{person.members}</p>
              </li>
            ))}
        </ul>
      </div>

      {/* Contact us bs*/}

      <div className="border-t border-b border-gray-300 py-4 text-center">
            {contactUs}
      </div>
    </div>
    
  );
};
