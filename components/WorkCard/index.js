import React from 'react';
import Image from 'next/image';
import Button from '../Button';
const WorkCard = ({ img, name, description, onClick, webSite, repository }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div className="cursor-pointer flex items-center relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto">
        <Image
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      <div className="flex mt-5 items-center">
        <h1 className="text-2xl font-medium">{name ? name : 'Project Name'}</h1>
        <div className="ml-auto">
          {repository && (
            <Button type="primary" onClick={() => window.open(repository)}>
              code repository
            </Button>
          )}
          {webSite && (
            <Button type="primary" onClick={() => window.open(webSite)}>
              web site
            </Button>
          )}
        </div>
      </div>
      <h2 className="text-xl opacity-50">
        {description ? description : 'Description'}
      </h2>
    </div>
  );
};

export default WorkCard;
